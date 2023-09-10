import { Axios, AxiosError, HttpStatusCode } from "axios";
import { Pageable } from "../../models/Pagination";
import { ApiResponse, ApiResponseErrorDetail } from "./ApiResponse";

export class ApiGatway {
    constructor(private readonly axios: Axios) {}

    async get<T>(path: string, pageable?: Pageable): Promise<ApiResponse<T>> {
        try {
            if (pageable) {
                const params = new URLSearchParams();

                for (const key in pageable) {
                    const p = pageable as unknown as Record<string, number>;
                    params.append(key, p[key].toString());
                }

                path += "?" + params.toString();
            }

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
