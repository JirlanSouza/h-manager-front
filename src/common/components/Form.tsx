import { Box } from "@mui/material";
import { FormEvent, ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    submitButton: ReactNode;
    cancelButton?: ReactNode;
    onSubmit?: (event: FormEvent) => void;
}

export function Form({
    children,
    submitButton,
    cancelButton: cancellButton,
    onSubmit,
}: FormProps) {
    return (
        <Box
            component="form"
            flexDirection="column"
            maxWidth={900}
            mb={3}
            onSubmit={onSubmit}
        >
            {children}

            <Box display="flex" gap={3} justifyContent="end" mt={2}>
                {cancellButton}
                {submitButton}
            </Box>
        </Box>
    );
}
