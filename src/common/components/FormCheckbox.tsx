import { Breakpoint, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { FormFieldState } from "../hooks/FormState";

type FormInputBreakpoints = Partial<Record<Breakpoint, number>>;

type InputProps = {
    label: string;
    fieldState: FormFieldState;
} & FormInputBreakpoints;

export function FormCheckbox({
    label,
    //fieldState,
    xs,
    sm,
    md,
    lg,
    xl,
}: InputProps) {
    return (
        <Grid item {...{ xs, sm, md, lg, xl }} sx={{ userSelect: "none" }}>
            <FormControlLabel
                label={label}
                control={<Checkbox size="small" />}
                //{...fieldState}
            />
        </Grid>
    );
}
