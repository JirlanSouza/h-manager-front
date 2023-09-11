import { useQuery as useReactQuery } from "react-query";
import { Pageable } from "../../models/Pagination";
import { ApiResponse } from "../api/ApiResponse";

export function useQuery<T>(
    queryKey: string | [string, Pageable],
    queryRequest: () => Promise<ApiResponse<T>>
) {
    const { isLoading, isError, data } = useReactQuery<ApiResponse<T>>(
        queryKey,
        queryRequest
    );

    return {
        isLoading,
        isError: (!isLoading && !data?.success) || isError,
        data,
    };
}
