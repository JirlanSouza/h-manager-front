import { TableRow, styled } from "@mui/material";

export const TableContentRow = styled(TableRow)(({ theme }) => ({
    "& td, & th": {
        borderBottom: `1px solid ` + theme.palette.divider,
    },
    "&:hover": {
        cursor: "pointer",
    },
}));
