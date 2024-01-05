import { SvgIconComponent } from "@mui/icons-material";
import { JSX } from "react";

export interface NavigationModel {
    path: string;
    label: string;
    title: string;
    component: () => JSX.Element;
}

export interface NavigationMenuModel extends NavigationModel {
    icon: SvgIconComponent;
}
