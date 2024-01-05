import {
    CalendarMonthRounded,
    GroupsRounded,
    HomeRounded,
    KingBedRounded,
} from "@mui/icons-material";
import { BookingSummaryScreen } from "../screens/booking/BookingSummaryScreen";
import { AddCustomerScreen } from "../screens/customers/AddCustomerScreen";
import { CustomersScreen } from "../screens/customers/CustomersScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { AddRoomScreen } from "../screens/rooms/AddRoomScreen";
import { NavigationMenuModel, NavigationModel } from "./NavigationModel";

export const GO_BACK = -1;

export enum NavigationPath {
    HOME = "/",
    CUSTOMERS = "/customers",
    CUSTOMERS_ADD = "/customers/add",
    CUSTOMERS_EDIT = "/customers/edit",
    BOOKING = "/booking",
    ROOM_ADD = "/rooms/add",
}

export const navigationsMenu: NavigationMenuModel[] = [
    {
        path: NavigationPath.HOME,
        label: "Home",
        title: "H manager",
        icon: HomeRounded,
        component: HomeScreen,
    },
    {
        path: NavigationPath.CUSTOMERS,
        label: "Clientes",
        title: "H manager - clientes",
        icon: GroupsRounded,
        component: CustomersScreen,
    },
    {
        path: NavigationPath.BOOKING,
        label: "Reservas",
        title: "H manager - reservas",
        icon: CalendarMonthRounded,
        component: BookingSummaryScreen,
    },
    {
        path: NavigationPath.ROOM_ADD,
        label: "Novo quarto",
        title: "H manager - quartos",
        icon: KingBedRounded,
        component: AddRoomScreen,
    },
];

export const navigations: NavigationModel[] = [
    {
        path: NavigationPath.CUSTOMERS_ADD,
        label: "Adicionar Cliente",
        title: "H manager - adicionar cliente",
        component: AddCustomerScreen,
    },
];

export const appNavigations: NavigationModel[] = [
    ...navigationsMenu,
    ...navigations,
];
