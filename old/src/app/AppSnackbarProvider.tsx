import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { SnackbarComponent } from "./components/SnackBarComponent";

const snackbarVariantsComponentsMapper = {
    default: SnackbarComponent,
    info: SnackbarComponent,
    success: SnackbarComponent,
    warn: SnackbarComponent,
    error: SnackbarComponent,
};

interface AppSnackbarProviderProps {
    children: ReactNode;
}

export function AppSnackbarProvider({ children }: AppSnackbarProviderProps) {
    return (
        <SnackbarProvider
            Components={snackbarVariantsComponentsMapper}
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        >
            {children}
        </SnackbarProvider>
    );
}
