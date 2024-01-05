import { createTheme } from "@mui/material";
import {
    blue,
    green,
    lightBlue,
    orange,
    purple,
    red,
} from "@mui/material/colors";
import { baseComponentStylesCustomizer } from "./baseComponentsStyles";

const palette = {
    light: {
        primary: {
            main: blue[400],
            light: blue[200],
            dark: blue[500],
        },
        secondary: {
            main: purple[200],
            light: purple[50],
            dark: purple[400],
        },
        error: {
            main: red[600],
            light: red[500],
            dark: red[700],
        },
        info: {
            main: lightBlue[400],
            light: lightBlue[300],
            dark: lightBlue[700],
        },
        success: {
            main: green[500],
            light: green[400],
            dark: green[700],
        },
        warning: {
            main: orange[500],
            light: orange[400],
            dark: orange[700],
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        divider: "rgba(0, 52, 149, 0.12)",
        background: {
            paper: "#f6f6f9",
            default: "#edeffd",
        },
        action: {
            active: "rgba(144, 202, 249, 0.54)",
            hover: "rgba(144, 202, 249, 0.11)",
            hoverOpacity: 0.08,
            selected: "rgba(144, 202, 249, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(144, 202, 249, 0.3)",
            disabledBackground: "rgba(144, 202, 249, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(144, 202, 249, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    dark: {
        primary: {
            main: blue[700],
            light: blue[400],
            dark: blue[800],
        },
        secondary: {
            main: purple[500],
            light: purple[300],
            dark: purple[700],
        },
        error: {
            main: red[700],
            light: red[500],
            dark: red[800],
        },
        info: {
            main: lightBlue[700],
            light: lightBlue[500],
            dark: lightBlue[900],
        },
        success: {
            main: green[800],
            light: green[600],
            dark: green[900],
        },
        warning: {
            main: "#ed6c02",
            light: orange[500],
            dark: orange[900],
        },
        text: {
            primary: "rgba(255, 255, 255, 0.8)",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(31, 38, 58, 0.8)",
        background: {
            paper: "#1c1e22",
            default: "#181a1e",
        },
        action: {
            active: "rgba(25, 118, 210, 0.16)",
            hover: "rgba(25, 118, 210, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(25, 118, 210, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(25, 118, 210, 0.3)",
            disabledBackground: "rgba(25, 118, 210, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(25, 118, 210, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
        },
    },
};

export enum COLOR_MODE {
    LIGHT = `light`,
    DARK = `dark`,
}

export const getAppTheme = (mode: COLOR_MODE) => {
    const theme = createTheme({
        palette: palette[mode],
    });
    theme.shape.borderRadius = parseInt(theme.spacing(1.5));
    baseComponentStylesCustomizer(theme);

    return theme;
};
