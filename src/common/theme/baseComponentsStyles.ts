import { Theme } from "@mui/material/styles";

export function baseComponentStylesCustomizer(theme: Theme) {
    theme.components = {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: theme.palette.background.paper,
                    color: theme.palette.getContrastText(
                        theme.palette.background.paper
                    ),
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    border: `1px solid ${theme.palette.divider}`,
                    background: theme.palette.action.hover,
                    color: theme.palette.primary.main,
                    "&:hover": {
                        background: theme.palette.action.selected,
                        color: theme.palette.primary.dark,
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary,
                    borderRadius: theme.shape.borderRadius,
                    "&.Mui-selected": {
                        color: theme.palette.primary.dark,
                        "& .MuiListItemIcon-root": {
                            color: theme.palette.primary.dark,
                        },
                        "& .MuiListItemText-root": {
                            color: theme.palette.primary.dark,
                        },
                    },
                    "&:hover": {
                        color: theme.palette.primary.dark,
                        "& .MuiListItemIcon-root": {
                            color: theme.palette.primary.dark,
                        },
                        "& .MuiListItemText-root": {
                            color: theme.palette.primary.dark,
                        },
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.palette.text.primary,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover ": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.main,
                        },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.divider,
                    },
                },
            },
        },
    };
}
