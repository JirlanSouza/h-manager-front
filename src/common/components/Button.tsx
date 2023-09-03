import MuiButton, { ButtonProps as MuiButtonprops } from "@mui/material/Button";

interface ButtonProps extends MuiButtonprops {
    enableMinWidth?: boolean;
}

export function Button({
    enableMinWidth,
    variant = "outlined",
    ...restprops
}: ButtonProps) {
    return (
        <MuiButton
            size="small"
            variant={variant}
            {...restprops}
            sx={enableMinWidth ? { minWidth: 100 } : {}}
        />
    );
}
