import { Axios, AxiosError, HttpStatusCode } from "axios";
import { createAxiosInstance } from "../../config/axiosConfig";
import { Pageable } from "../../models/Pagination";
import { ApiResponse, ApiResponseErrorDetail } from "./ApiResponse";

export class ApiGatway {
    private static instance: ApiGatway;
    private axios: Axios;

    static getInstance() {
        if (!ApiGatway.instance) {
            ApiGatway.instance = new ApiGatway();
        }

        return ApiGatway.instance;
    }

    private constructor() {
        this.axios = createAxiosInstance(import.meta.env.VITE_API_BASE_URL);
    }

    setToken(token: string) {
        this.axios = createAxiosInstance(
            import.meta.env.VITE_API_BASE_URL,
            token
        );
    }

    async get<T, K>(
        path: string,
        pageable?: Pageable<T>
    ): Promise<ApiResponse<K>> {
        try {
            const pathWithParams = this.pageableToParams(path, pageable);
            const response = await this.axios.get<K>(pathWithParams);

            if (response.status !== HttpStatusCode.Ok) {
                return ApiResponse.createError<K>();
            }

            return ApiResponse.createSuccess(response.data);
        } catch (erro) {
            return ApiResponse.createError(erro as Error);
        }
    }

    async post<R, T>(path: string, data: T): Promise<ApiResponse<R>> {
        try {
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

    private pageableToParams<T>(path: string, pageable?: Pageable<T>) {
        if (pageable) {
            const params = new URLSearchParams();
            params.append("page", pageable.page.toString());
            params.append("size", pageable.size.toString());

            if (pageable.sort) {
                params.append("sort", pageable.sort.toParam());
            }

            return `${path}?${params.toString()}`;
        }

        return path;
    }
}
