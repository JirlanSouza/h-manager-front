import { Theme } from "@emotion/react";
import { Box, Paper, SxProps } from "@mui/material";
import { FormEvent, ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    submitButton: ReactNode;
    cancelButton?: ReactNode;
    onSubmit?: (event: FormEvent) => void;
    sx?: SxProps<Theme>;
}

export function Form({
    children,
    submitButton,
    cancelButton: cancellButton,
    onSubmit,
    sx,
}: FormProps) {
    return (
        <Paper
            component="form"
            elevation={0}
            sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                maxWidth: 900,
                p: 2,
                ...sx,
            }}
            onSubmit={onSubmit}
        >
            {children}

            <Box display="flex" gap={3} mt="auto" ml="auto">
                {cancellButton}
                {submitButton}
            </Box>
        </Paper>
    );
}
