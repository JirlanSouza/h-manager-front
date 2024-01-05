import { Sort, SortBy, SortDirection } from "../Pagination";

export class SortImpl<T> implements Sort<T> {
    constructor(
        public by: SortBy<T>,
        public direction: SortDirection = "asc"
    ) {}

    toParam(): string {
        return `${this.by.toString()},${this.direction}`;
    }
}
