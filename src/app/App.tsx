import { JSX } from "react";
import { Layout } from "./Layout.tsx";
import { ColorModeContextProvider } from "./contexts/colorModeContext.tsx";
import { SettingsService } from "./service/settingsService.ts";

const settingsService = new SettingsService();

export function App(): JSX.Element {
    return (
        <ColorModeContextProvider settingsService={settingsService}>
            <Layout settingService={settingsService}></Layout>
        </ColorModeContextProvider>
    );
}
