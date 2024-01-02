import { InputMask, InputMaskProps, Replacement } from "@react-input/mask";
import { forwardRef } from "react";
import { FormInput, FormInputProps } from "./FormInput";

interface FormInputMaskedprops extends Omit<FormInputProps, "inputComponent"> {
    mask: string;
    replacement: Replacement;
}

export function FormInputMasked({
    mask,
    replacement,
    ...props
}: FormInputMaskedprops) {
    const inputComponent = forwardRef<HTMLInputElement, InputMaskProps>(
        (props, forwardedRef) => {
            return (
                <InputMask
                    mask={mask}
                    replacement={replacement}
                    ref={forwardedRef}
                    {...props}
                />
            );
        }
    );

    return <FormInput {...props} inputComponent={inputComponent} />;
}
