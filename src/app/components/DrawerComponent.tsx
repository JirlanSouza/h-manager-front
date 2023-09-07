import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationModel } from "../../navigation/NavigationModel";
import { navigationsMenu } from "../../navigation/navigations";

interface DrawerProps extends MuiDrawerProps {
    width: number;
}

const baseMixin = (theme: Theme): CSSObject => ({
    height: `calc(100% - ${
        parseInt(theme.mixins.toolbar.minHeight as string) +
        parseInt(theme.spacing(2))
    }px)`,
    border: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    top: theme.mixins.toolbar.minHeight,
    borderRadius: `${theme.shape.borderRadius}px`,
    background: theme.palette.background.paper,
});

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    margin: theme.spacing(1),
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    margin: theme.spacing(1),
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(8)} + 1px)`,
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open, width }) => ({
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    ...(open && {
        ...openedMixin(theme, width),
        "& .MuiDrawer-paper": {
            ...baseMixin(theme),
            ...openedMixin(theme, width),
        },
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": { ...baseMixin(theme), ...closedMixin(theme) },
    }),
}));

interface DrawerComponentProps {
    open: boolean;
}

export function DrawerComponent({ open }: DrawerComponentProps) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(window.location.pathname);

    function handleItemClick(item: NavigationModel) {
        setSelectedItem(item.path);
        navigate(item.path);
    }

    return (
        <Drawer variant={"permanent"} open={open} width={240}>
            <List>
                {navigationsMenu.map((navigationItem) => (
                    <ListItem
                        key={navigationItem.path}
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={() => handleItemClick(navigationItem)}
                    >
                        <ListItemButton
                            selected={selectedItem === navigationItem.path}
                            sx={{
                                minHeight: theme.spacing(3),
                                minWidth: theme.spacing(3),
                                alignItems: "center",
                                justifyContent: "start",
                                px: 1.6,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <navigationItem.icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={navigationItem.label}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
