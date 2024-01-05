/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_AUTH_CLIENT_ID: string;
    readonly VITE_AUTH_ESCOPE: string;
    readonly VITE_AUTH_REDIRECT_URI: string;
    readonly VITE_AUTH_CHALLENGE_METHODE: string;
    readonly VITE_AUTH_SERVER_TOKEN_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
