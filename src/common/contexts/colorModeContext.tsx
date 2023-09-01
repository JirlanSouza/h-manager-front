import { ThemeProvider } from "@mui/material/styles";
import {
    JSX,
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";
import { SettingsService } from "../../services/settingsService.ts";
import { COLOR_MODE, getAppTheme } from "../theme/theme.ts";

const ColorModeContext = createContext({
    toggleColorMode: () => {},
    isLightMode: true,
});

interface ColorModeContextProviderProps {
    children: ReactNode;
    settingsService: SettingsService;
}

export function ColorModeContextProvider({
    children,
    settingsService,
}: ColorModeContextProviderProps): JSX.Element {
    const [colorMode, setColorMode] = useState(settingsService.getColorMode());

    const toggleColorMode = () => {
        setColorMode((prevMode) => {
            const mode =
                prevMode === COLOR_MODE.LIGHT
                    ? COLOR_MODE.DARK
                    : COLOR_MODE.LIGHT;
            settingsService.saveColorMode(mode);
            return mode;
        });
    };

    const contextValue = useMemo(
        () => ({
            toggleColorMode,
            isLightMode: colorMode === COLOR_MODE.LIGHT,
        }),
        [colorMode]
    );
    const appTheme = useMemo(() => getAppTheme(colorMode), [colorMode]);

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export const useColorMode = () => useContext(ColorModeContext);
