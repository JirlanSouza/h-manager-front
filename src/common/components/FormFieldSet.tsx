import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

interface FormFieldSetProps {
    title?: string;
    children: ReactNode;
}

export function FormFieldSet({ title, children }: FormFieldSetProps) {
    return (
        <>
            {title && <Typography variant="subtitle1">{title}</Typography>}
            <Grid container spacing={1} mb={3}>
                {children}
            </Grid>
        </>
    );
}
