import { JSX } from "react";
import { ColorModeContextProvider } from "../common/contexts/colorModeContext.tsx";
import { AppRouter } from "../navigation/routes/AppRouter.tsx";
import { SettingsService } from "../services/settingsService.ts";

const settingsService = new SettingsService();

export function App(): JSX.Element {
    return (
        <ColorModeContextProvider settingsService={settingsService}>
            <AppRouter settingsService={settingsService} />
        </ColorModeContextProvider>
    );
}
