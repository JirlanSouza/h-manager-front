import { Axios, AxiosError, HttpStatusCode } from "axios";
import { ApiResponse, ApiResponseErrorDetail } from "./ApiResponse";

export class ApiGatway {
    constructor(private readonly axios: Axios) {}

    async get<T>(path: string): Promise<ApiResponse<T>> {
        try {
            const response = await this.axios.get<T>(path);

            if (response.status !== HttpStatusCode.Ok) {
                return ApiResponse.createError<T>();
            }

            return ApiResponse.createSuccess(response.data);
        } catch (erro) {
            return ApiResponse.createError(erro as Error);
        }
    }

    async post<T, R>(path: string, data: T): Promise<ApiResponse<R>> {
        try {
            console.log(path, JSON.stringify(data));
            const response = await this.axios.post<R>(path, data);

            if (
                response.status !== HttpStatusCode.Ok &&
                response.status !== HttpStatusCode.Created
            ) {
                return ApiResponse.createError<R>();
            }

            return ApiResponse.createSuccess(response.data);
        } catch (err) {
            const erro = err as AxiosError;
            const detail = erro.response?.data as ApiResponseErrorDetail;

            if (detail) {
                return ApiResponse.createError(erro, detail);
            }

            return ApiResponse.createError(erro as Error);
        }
    }
}
