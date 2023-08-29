import {
    ChevronLeftRounded,
    DarkModeOutlined,
    LightModeOutlined,
    MenuRounded,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";
import { useColorMode } from "../contexts/colorModeContext.tsx";

interface AppBarComponentProps {
    open: boolean;
    onMenuButtonClick: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export function AppBarComponent({
    open,
    onMenuButtonClick,
}: AppBarComponentProps) {
    const theme = useTheme();
    const { toggleColorMode, isLightMode } = useColorMode();

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box display={"flex"}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onMenuButtonClick}
                        edge="start"
                        sx={{
                            marginRight: theme.spacing(3),
                        }}
                    >
                        {open ? <ChevronLeftRounded /> : <MenuRounded />}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        H manager
                    </Typography>
                </Box>
                <Box>
                    <IconButton onClick={toggleColorMode}>
                        {isLightMode ? (
                            <DarkModeOutlined />
                        ) : (
                            <LightModeOutlined />
                        )}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
