import { SvgIconComponent } from "@mui/icons-material";
import { JSX } from "react";

export interface NavigationModel {
    path: string;
    label: string;
    title: string;
    icon: SvgIconComponent;
    component: () => JSX.Element;
}
