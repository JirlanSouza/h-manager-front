import axios, { AxiosError } from "axios";

export function createAxiosInstance(baseUrl: string) {
    const axiosInstace = axios.create({
        baseURL: baseUrl,
    });

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
