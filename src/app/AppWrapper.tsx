import React, { JSX } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ColorModeContextProvider } from "../common/contexts/colorModeContext.tsx";
import { AppRouter } from "../navigation/routes/AppRouter.tsx";
import { AuthenticationService } from "../services/auth/AuthenticationService.ts";
import { SettingsService } from "../services/settingsService.ts";
import { AppSnackbarProvider } from "./AppSnackbarProvider.tsx";

const settingsService = new SettingsService();
const queryClient = new QueryClient();
const authService = new AuthenticationService();

export function AppWrapper(): JSX.Element {
    return (
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ColorModeContextProvider settingsService={settingsService}>
                    <AppSnackbarProvider>
                        <AppRouter
                            settingsService={settingsService}
                            authService={authService}
                        />
                    </AppSnackbarProvider>
                </ColorModeContextProvider>
            </QueryClientProvider>
        </React.StrictMode>
    );
}
