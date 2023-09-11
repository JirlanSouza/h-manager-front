import { Pageable, Sort } from "../Pagination";

export class PageableImpl<T> implements Pageable<T> {
    constructor(
        public page: number,
        public size: number,
        public sort?: Sort<T>
    ) {}

    static default<T>(sort?: Sort<T>) {
        return new PageableImpl<T>(0, 20, sort);
    }
}
