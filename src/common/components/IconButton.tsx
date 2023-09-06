import { styled } from "@mui/material";
import MuiIconButton from "@mui/material/IconButton";

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.action.hover,
    color: theme.palette.primary.main,
    "&:hover": {
        background: theme.palette.action.selected,
        color: theme.palette.primary.dark,
    },
}));
