/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import {
    DefaultValues,
    FieldError,
    FieldErrors,
    FieldPath,
    FieldValues,
    Resolver,
    UseFormRegisterReturn,
    useForm,
} from "react-hook-form";
import { ObjectSchema } from "yup";

export interface FormFieldState extends UseFormRegisterReturn {
    error: boolean;
    helperText?: string;
}

function parseFormFieldError<T extends FieldValues>(
    fieldPath: FieldPath<T>,
    errors: FieldErrors<T>
) {
    const pathsfields = fieldPath.split(".");
    let error = errors[pathsfields[0]] as any;

    if (pathsfields.length > 1) {
        console.log(pathsfields, error, errors);

        for (let i = 1; i < pathsfields.length && error; i++) {
            error = error[pathsfields[i]];
        }
    }

    return error as FieldError;
}

export function useAppForm<T extends FieldValues>(
    schema: ObjectSchema<T>,
    defaultValues?: DefaultValues<T>
) {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<T>({
        defaultValues,
        resolver: yupResolver(schema) as unknown as Resolver<T>,
    });

    function getFormField(fieldPath: FieldPath<T>): FormFieldState {
        const error = parseFormFieldError(fieldPath, errors);
        return {
            ...register(fieldPath),
            error: error !== undefined,
            helperText: error?.message,
        };
    }

    return {
        isLoading,
        getFormField,
        handleSubmit,
    };
}
