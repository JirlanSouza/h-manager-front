import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../../app/AppLayout";
import { SettingsService } from "../../services/settingsService";
import { appNavigations } from "../navigations";

interface AppRouterProps {
    settingsService: SettingsService;
}

export function AppRouter({ settingsService }: AppRouterProps) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <AppLayout settingService={settingsService}>
                    <Outlet />
                </AppLayout>
            ),
            children: appNavigations.map((route) => ({
                path: route.path,
                element: <route.component />,
            })),
        },
    ]);

    return <RouterProvider router={router} />;
}
