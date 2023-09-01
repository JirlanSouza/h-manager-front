export class ApiResponse<T> {
    private constructor(
        readonly success: boolean,
        readonly data?: T,
        readonly error?: {
            message: string;
        }
    ) {}

    static createSuccess<T>(data: T) {
        return new ApiResponse<T>(true, data);
    }

    static createError<T>(error?: { message: string }) {
        const responseError = error?.message
            ? { message: error.message }
            : { message: "Ocerreu um erro durante o processamento!" };

        return new ApiResponse<T>(false, undefined, responseError);
    }
}
