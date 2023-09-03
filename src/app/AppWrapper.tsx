import React, { JSX } from "react";
import { ColorModeContextProvider } from "../common/contexts/colorModeContext.tsx";
import { AppRouter } from "../navigation/routes/AppRouter.tsx";
import { SettingsService } from "../services/settingsService.ts";
import { AppSnackbarProvider } from "./AppSnackBarProvider.tsx";

const settingsService = new SettingsService();

export function AppWrapper(): JSX.Element {
    return (
        <React.StrictMode>
            <ColorModeContextProvider settingsService={settingsService}>
                <AppSnackbarProvider>
                    <AppRouter settingsService={settingsService} />
                </AppSnackbarProvider>
            </ColorModeContextProvider>
        </React.StrictMode>
    );
}
