import { GroupsRounded, HomeRounded } from "@mui/icons-material";
import { CustomersScreen } from "../screens/customers/CustomersScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { NavigationModel } from "./NavigationModel";

export const navigationList: NavigationModel[] = [
    {
        path: "/",
        label: "Home",
        title: "H manager",
        icon: HomeRounded,
        component: HomeScreen,
    },
    {
        path: "/customers",
        label: "Clientes",
        title: "H manager - clientes",
        icon: GroupsRounded,
        component: CustomersScreen,
    },
];
