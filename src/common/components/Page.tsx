import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Pageprops {
    title?: string;
    children: ReactNode;
}

export function Page({ title, children }: Pageprops) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
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
