import axios, { AxiosError } from "axios";

export function createAxiosInstance(baseUrl: string, token?: string) {
    let axiosInstace = axios.create({
        baseURL: baseUrl,
    });

    if (token) {
        axiosInstace = axios.create({
            baseURL: baseUrl,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    }

    axiosInstace.interceptors.response.use(
        (r) => r,
        (error: AxiosError) => {
            switch (error.code) {
                case AxiosError.ERR_NETWORK:
                    error.message = "Erro ao conectar no servidor!";
                    break;
            }

            return Promise.reject(error);
        }
    );

    return axiosInstace;
}
