import { JSX } from "react";
import { AppRouter } from "../navigation/routes/AppRouter.tsx";
import { SettingsService } from "../service/settingsService.ts";
import { ColorModeContextProvider } from "./contexts/colorModeContext.tsx";

const settingsService = new SettingsService();

export function App(): JSX.Element {
    return (
        <ColorModeContextProvider settingsService={settingsService}>
            <AppRouter settingsService={settingsService} />
        </ColorModeContextProvider>
    );
}
