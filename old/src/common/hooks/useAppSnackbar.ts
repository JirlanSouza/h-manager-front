import { useSnackbar } from "notistack";
const AUTO_RIDE_DURATION_ERROR_SNACKBAR = 10000;

export function useAppSnackbar() {
    const { enqueueSnackbar } = useSnackbar();
    function enqueueSuccessSnackBar(message: string) {
        enqueueSnackbar(message, {
            variant: "success",
        });
    }

    function enqueueErrorSnackBar(message: string) {
        enqueueSnackbar(message, {
            variant: "error",
            autoHideDuration: AUTO_RIDE_DURATION_ERROR_SNACKBAR,
            preventDuplicate: true,
        });
    }

    return {
        enqueueSuccessSnackBar,
        enqueueErrorSnackBar,
    };
}
