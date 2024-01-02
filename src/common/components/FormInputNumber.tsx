import {
    InputNumberFormat,
    InputNumberFormatProps,
} from "@react-input/number-format";
import { forwardRef } from "react";
import { FormInput, FormInputProps } from "./FormInput";

interface FormInputNumberProps
    extends Omit<FormInputProps, "inputComponent">,
        InputNumberFormatProps {
    format: "decimal" | "currency" | "percent" | "unit";
}

export function FormInputNumber({
    format,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    signDisplay,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    ...inputProps
}: FormInputNumberProps) {
    const inputComponent = forwardRef<HTMLInputElement, InputNumberFormatProps>(
        (props, forwardedRef) => {
            return (
                <InputNumberFormat
                    ref={forwardedRef}
                    format={format}
                    currency={currency}
                    currencyDisplay={currencyDisplay}
                    unit={unit}
                    unitDisplay={unitDisplay}
                    signDisplay={signDisplay}
                    minimumIntegerDigits={minimumIntegerDigits}
                    minimumFractionDigits={minimumFractionDigits}
                    maximumFractionDigits={maximumFractionDigits}
                    {...props}
                />
            );
        }
    );

    return <FormInput {...inputProps} inputComponent={inputComponent} />;
}
