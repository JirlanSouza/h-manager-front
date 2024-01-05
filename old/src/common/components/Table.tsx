import {
    Table as MuiTable,
    Paper,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    useTheme,
} from "@mui/material";
import { ReactNode } from "react";

interface TableProps {
    columns: ReactNode;
    content: ReactNode;
    pagination?: ReactNode;
}

export function Table({ columns, content, pagination }: TableProps) {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
            }}
        >
            <TableContainer sx={{ flex: 1 }}>
                <MuiTable stickyHeader size="small">
                    <TableHead>
                        <TableRow
                            sx={{
                                "& td, & th": {
                                    borderBottom:
                                        `1px solid ` + theme.palette.divider,
                                },
                            }}
                        >
                            {columns}
                        </TableRow>
                    </TableHead>
                    <TableBody>{content}</TableBody>
                </MuiTable>
            </TableContainer>
            {pagination}
        </Paper>
    );
}
