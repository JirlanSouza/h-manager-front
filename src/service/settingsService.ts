import { COLOR_MODE } from "../app/theme/theme";

export class SettingsService {
    private readonly COLOR_MODE_KEY = "app_color_mode";
    private readonly DRAWER_OPEN_KEY = "app_drawer_open";

    getColorMode(): COLOR_MODE {
        return (localStorage.getItem(this.COLOR_MODE_KEY) ||
            COLOR_MODE.LIGHT) as COLOR_MODE;
    }

    saveColorMode(mode: COLOR_MODE) {
        localStorage.setItem(this.COLOR_MODE_KEY, mode);
    }

    getDrawerOpen(): boolean {
        return Boolean(localStorage.getItem(this.DRAWER_OPEN_KEY));
    }

    saveDrawerOpen(drawerOpen: boolean) {
        localStorage.setItem(this.DRAWER_OPEN_KEY, String(drawerOpen));
    }
}
