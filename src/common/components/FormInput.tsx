import { Breakpoint, Grid, TextField } from "@mui/material";
import { FormFieldState } from "../adapters/FormState";

type FormInputBreakpoints = Partial<Record<Breakpoint, number>>;

type InputProps = {
    label: string;
    fieldState: FormFieldState;
} & FormInputBreakpoints;

export function FormInput({
    label,
    fieldState,
    xs,
    sm,
    md,
    lg,
    xl,
}: InputProps) {
    return (
        <Grid item {...{ xs, sm, md, lg, xl }}>
            <TextField
                label={label}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
                {...fieldState}
            />
        </Grid>
    );
}
