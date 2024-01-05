import MuiTablePagination from "@mui/material/TablePagination";
import { Page } from "../../models/Pagination";

interface TablePaginationProps {
    itemsPerPageRange: number[];
    pageable?: Omit<Page<object>, "content">;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

export function TablePagination({
    itemsPerPageRange,
    pageable,
    onPageChange,
    onPageSizeChange,
}: TablePaginationProps) {
    return (
        <MuiTablePagination
            rowsPerPageOptions={itemsPerPageRange}
            component="div"
            count={pageable?.totalItems || 0}
            rowsPerPage={pageable?.size || 20}
            page={pageable?.number || 0}
            showFirstButton
            showLastButton
            labelRowsPerPage="Items por página"
            labelDisplayedRows={({ from, to, count }) =>
                `${from} - ${to} de ${count}`
            }
            onPageChange={(_, page) => onPageChange(page)}
            onRowsPerPageChange={(e) =>
                onPageSizeChange(parseInt(e.target.value))
            }
        />
    );
}
