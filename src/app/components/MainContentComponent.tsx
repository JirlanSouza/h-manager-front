import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

interface MainContentComponentProps {
    children: ReactNode;
}

export function MainContentComponent({ children }: MainContentComponentProps) {
    const theme = useTheme();

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                marginTop: `calc(${
                    theme.mixins.toolbar.minHeight
                }px + ${theme.spacing(1)})`,
                pr: 1,
                pb: 1,
                overflow: "hidden",
            }}
        >
            {children}
        </Box>
    );
}
