import {
    ChevronLeftRounded,
    DarkModeOutlined,
    LightModeOutlined,
    MenuRounded,
    SearchRounded,
} from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";
import hManagerLogo from "../../assets/h-manager-logo.svg";
import { IconButton } from "../../common/components/IconButton.tsx";
import { useColorMode } from "../../common/contexts/colorModeContext.tsx";
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

const Logo = styled("img")(({ theme }) => ({
    height: `calc(${theme.mixins.toolbar.minHeight}px - ${theme.spacing(2)})`,
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
                            marginRight: theme.spacing(2),
                        }}
                    >
                        {open ? <ChevronLeftRounded /> : <MenuRounded />}
                    </IconButton>
                    <Logo src={hManagerLogo} alt="H manager - logo" />
                </Box>
                <TextField
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRounded />
                            </InputAdornment>
                        ),
                    }}
                />
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
