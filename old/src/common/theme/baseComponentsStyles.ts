import { Theme } from "@mui/material/styles";

export function baseComponentStylesCustomizer(theme: Theme) {
    theme.components = {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    colorScheme: theme.palette.mode,
                },

                "body, #root": {
                    width: "100vw",
                    height: "100vh",
                    margin: 0,
                    padding: 0,
                    overflow: "hidden",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "transparent",
                        width: theme.spacing(1),
                        borderTopRightRadius: theme.spacing(1),
                        borderBottomRightRadius: theme.spacing(1),
                        overflow: "hidden",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            borderRadius: theme.spacing(1),
                            backgroundColor: theme.palette.divider,
                            minHeight: 24,
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: theme.palette.primary.main,
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: theme.palette.primary.main,
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: theme.palette.primary.main,
                        },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
                        {
                            backgroundColor: theme.palette.divider,
                        },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: theme.palette.background.default,
                    "& .MuiToolbar-root": {
                        paddingLeft: theme.spacing(4),
                        paddingRight: theme.spacing(1.5),
                    },
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
        MuiTableHead: {
            styleOverrides: {
                root: {
                    "& th": {
                        background: theme.palette.background.paper,
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    marginRight: theme.spacing(1),
                },
            },
        },
    };
}
