import {
    CarCrashRounded,
    InboxRounded,
    MailRounded,
    SatelliteRounded,
} from "@mui/icons-material";
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

interface DrawerProps extends MuiDrawerProps {
    width: number;
}

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open, width }) => ({
    width,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme, width),
        "& .MuiDrawer-paper": openedMixin(theme, width),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

interface DrawerComponentProps {
    open: boolean;
}

const menuItems = [
    { name: "Inbox", icon: InboxRounded },
    { name: "Starred", icon: MailRounded },
    { name: "Send email", icon: SatelliteRounded },
    { name: "Drafts", icon: CarCrashRounded },
];

export function DrawerComponent({ open }: DrawerComponentProps) {
    const theme = useTheme();
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <Drawer
            variant={"permanent"}
            open={open}
            width={240}
            PaperProps={{ sx: { border: "none" } }}
        >
            <DrawerHeader />
            <List
                sx={{
                    margin: theme.spacing(1),
                }}
            >
                {menuItems.map((menuItem, index) => (
                    <ListItem
                        key={menuItem.name}
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={() => setSelectedItem(index)}
                    >
                        <ListItemButton
                            selected={selectedItem === index}
                            key={menuItem.name}
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
                                <menuItem.icon />
                            </ListItemIcon>
                            <ListItemText
                                primary={menuItem.name}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
