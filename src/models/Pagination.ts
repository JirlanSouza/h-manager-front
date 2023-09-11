export type SortDirection = "asc" | "desc";
export type SortBy<T> = keyof T;

export interface Sort<T> {
    by: SortBy<T>;
    direction: SortDirection;
    toParam(): string;
}

export interface Pageable<T> {
    page: number;
    size: number;
    sort?: Sort<T>;
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
