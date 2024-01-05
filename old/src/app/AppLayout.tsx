import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { JSX, ReactNode, useState } from "react";
import { SettingsService } from "../services/settingsService.ts";
import { AppBarComponent } from "./components/AppBarComponent.tsx";
import { DrawerComponent } from "./components/DrawerComponent.tsx";
import { MainContentComponent } from "./components/MainContentComponent.tsx";

interface LayoutProps {
    children?: ReactNode;
    settingService: SettingsService;
}

export function AppLayout({
    children,
    settingService,
}: LayoutProps): JSX.Element {
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
            }}
        >
            <CssBaseline />
            <AppBarComponent open={open} onMenuButtonClick={handleDrawerOpen} />
            <DrawerComponent open={open} />
            <MainContentComponent>{children}</MainContentComponent>
        </Box>
    );
}
