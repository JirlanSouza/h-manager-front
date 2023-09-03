import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface Pageprops {
    title?: string;
    children: ReactNode;
}

export function Page({ title, children }: Pageprops) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: theme.palette.action.hover,
                borderRadius: theme.shape.borderRadius + "px",
                m: 1,
                p: 2,
                pt: 1,
            }}
        >
            {title && (
                <Typography variant="h6" fontWeight="semi-bold" mb={2}>
                    {title}
                </Typography>
            )}
            {children}
        </Box>
    );
}
