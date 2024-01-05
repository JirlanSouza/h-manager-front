import { TableCell, TableSortLabel } from "@mui/material";
import { ReactNode } from "react";
import { Sort, SortBy } from "../../models/Pagination";

interface TableHeaderCellProps<T> {
    children: ReactNode;
    sortProperties?: {
        sortBy: SortBy<T>;
        sort?: Sort<T>;
        onSortChange: (by: SortBy<T>) => void;
    };
    align?: "inherit" | "left" | "center" | "right" | "justify";
}

export function TableHeaderCell<T>({
    children,
    sortProperties,
    align,
}: TableHeaderCellProps<T>) {
    if (!sortProperties || !sortProperties.sort) {
        return <TableCell align={align}>{children}</TableCell>;
    }

    const { sortBy, sort, onSortChange } = sortProperties;
    const isEqualsSorBy = sort.by === sortBy;

    return (
        <TableCell
            align={align}
            sortDirection={isEqualsSorBy ? sort.direction : false}
        >
            <TableSortLabel
                active={isEqualsSorBy}
                direction={isEqualsSorBy ? sort.direction : "asc"}
                onClick={() => onSortChange(sortBy)}
            >
                {children}
            </TableSortLabel>
        </TableCell>
    );
}
