import { UseFormRegisterReturn } from "react-hook-form";

export interface FormFieldState extends UseFormRegisterReturn {
    error: boolean;
    helperText?: string;
}
