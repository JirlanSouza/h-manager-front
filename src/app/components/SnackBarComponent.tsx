import { Alert } from "@mui/material";
import { CustomContentProps, useSnackbar } from "notistack";
import { forwardRef } from "react";

export const SnackbarComponent = forwardRef<HTMLDivElement, CustomContentProps>(
    (props, ref) => {
        const { closeSnackbar } = useSnackbar();

        if (props.variant === "default") {
            props.variant = "info";
        }

        function handleClose() {
            closeSnackbar(props.id);
        }

        return (
            <Alert ref={ref} severity={props.variant} onClose={handleClose}>
                {props.message}
            </Alert>
        );
    }
);
