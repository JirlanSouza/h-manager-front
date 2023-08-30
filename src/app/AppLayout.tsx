import { CssBaseline, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { JSX, ReactNode, useState } from "react";
import { AppBarComponent } from "./components/AppBarComponent.tsx";
import { DrawerComponent } from "./components/DrawerComponent.tsx";
import { MainContentComponent } from "./components/MainContentComponent.tsx";
import { SettingsService } from "./service/settingsService.ts";

interface LayoutProps {
    children?: ReactNode;
    settingService: SettingsService;
}

export function AppLayout({
    children,
    settingService,
}: LayoutProps): JSX.Element {
    const theme = useTheme();
    const [open, setOpen] = useState(settingService.getDrawerOpen());

    function handleDrawerOpen() {
        setOpen((s) => {
            settingService.saveDrawerOpen(!s);
            return !s;
        });
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                background: theme.palette.background.paper,
            }}
        >
            <CssBaseline />
            <AppBarComponent open={open} onMenuButtonClick={handleDrawerOpen} />
            <DrawerComponent open={open} />
            <MainContentComponent>{children}</MainContentComponent>
        </Box>
    );
}
