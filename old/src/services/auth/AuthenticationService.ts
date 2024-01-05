import { Axios } from "axios";
import { ApiGatway } from "../../common/api/ApiGatway";
import { TokenResponse } from "./TokenResponse";

export class AuthenticationService {
    private isBusy = false;

    public login() {
        if (this.isBusy) return;

        this.isBusy = true;
        const authData = {
            CLIENT_ID: import.meta.env.VITE_AUTH_CLIENT_ID,
            REDIRECT_URI: import.meta.env.VITE_AUTH_REDIRECT_URI,
            RESPONSE_TYPE: "code",
            ESCOPE: import.meta.env.VITE_AUTH_ESCOPE,
            CHALLENGE: "8OTC92xYkW7CWPJGhRvqCR0U1CR6L8PhhpRGGxgW4Ts",
            CHALLENGE_METHODE: "S256",
        };

        const url = new URL("http://127.0.0.1:8080/oauth2/authorize");
        const parameters = new URLSearchParams();

        parameters.append("client_id", authData.CLIENT_ID);
        parameters.append("redirect_uri", authData.REDIRECT_URI);
        parameters.append("response_type", authData.RESPONSE_TYPE);
        parameters.append("escope", authData.ESCOPE);
        parameters.append("code_challenge", authData.CHALLENGE);
        parameters.append("code_challenge_method", authData.CHALLENGE_METHODE);
        parameters.append("state", "126fdgfa");
        url.search = parameters.toString();

        window.location.href = url.toString();
    }

    public async getToken(url: URL): Promise<boolean> {
        const code = url.searchParams.get("code") as string;

        const authAPi = new Axios({
            headers: {
                Authorization: "Basic ZnJvbnRlbmQ6bG9jYWxfc2VjcmV0",
                Accept: "application/json",
            },
        });

        try {
            const params = new URLSearchParams();
            params.append("grant_type", "authorization_code");
            params.append("code", code);
            params.append("code_verifier", "asdf");
            params.append(
                "redirect_uri",
                "http://127.0.0.1:5173/login/authorize"
            );

            const result = await authAPi.post(
                import.meta.env.VITE_AUTH_SERVER_TOKEN_URL,
                params
            );

            const tokenResponse: TokenResponse = JSON.parse(result.data);

            console.log(tokenResponse);

            if (result.status !== 200) return false;

            this.setToken(tokenResponse);

            return true;
        } catch (e) {
            console.log(e);

            return false;
        }
    }

    private setToken(tokenResponse: TokenResponse) {
        localStorage.setItem("token", tokenResponse.access_token);
        localStorage.setItem("refresh_token", tokenResponse.refresh_token);

        ApiGatway.getInstance().setToken(tokenResponse.access_token);
    }
}
