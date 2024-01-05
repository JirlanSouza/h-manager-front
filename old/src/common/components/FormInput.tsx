import { Breakpoint, Grid, TextField } from "@mui/material";
import { InputMaskProps } from "@react-input/mask";
import { InputNumberFormatProps } from "@react-input/number-format";
import { ReactNode } from "react";
import { FormFieldState } from "../hooks/FormState";

type FormInputBreakpoints = Partial<Record<Breakpoint, number>>;

export type FormInputProps = {
    label: string;
    inputComponent?: React.ForwardRefExoticComponent<
        InputMaskProps | InputNumberFormatProps
    >;
    fieldState: FormFieldState;
} & FormInputBreakpoints;

export function FormInput({
    label,
    inputComponent,
    fieldState,
    xs,
    sm,
    md,
    lg,
    xl,
}: FormInputProps): ReactNode {
    const inputProps = inputComponent ? { inputComponent } : {};

    return (
        <Grid item {...{ xs, sm, md, lg, xl }}>
            <TextField
                label={label}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth
                {...fieldState}
                InputProps={inputProps}
            />
        </Grid>
    );
}
