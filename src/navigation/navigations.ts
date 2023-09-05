import { GroupsRounded, HomeRounded } from "@mui/icons-material";
import { AddCustomerScreen } from "../screens/customers/AddCustomerScreen";
import { CustomersScreen } from "../screens/customers/CustomersScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { NavigationMenuModel, NavigationModel } from "./NavigationModel";

export const GO_BACK = -1;

export enum NavigationPath {
    HOME = "/",
    CUSTOMERS = "/customers",
    CUSTOMERS_ADD = "/customers/add",
    CUSTOMERS_EDIT = "/customers/edit",
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
