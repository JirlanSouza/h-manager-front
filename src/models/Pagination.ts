export interface Pageable {
    page: number;
    size: number;
}

export interface Page<T> {
    number: number;
    size: number;
    totalItems: number;
    isFirst: boolean;
    isLast: boolean;
    isEmpty: boolean;
    content: T[];
}
