import {
    Outlet,
    RouterProvider,
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import { AppLayout } from "../../app/AppLayout";
import { AuthenticationService } from "../../services/auth/AuthenticationService";
import { SettingsService } from "../../services/settingsService";
import { appNavigations } from "../navigations";

interface AppRouterProps {
    settingsService: SettingsService;
    authService: AuthenticationService;
}

export function AppRouter({ settingsService, authService }: AppRouterProps) {
    const router = createBrowserRouter([
        {
            path: "/login/authorize",
            loader: async (loader) => {
                const isAuthorized = await authService.getToken(
                    new URL(loader.request.url)
                );

                if (isAuthorized) {
                    return redirect("/");
                }

                return redirect("/login");
            },
            element: <></>,
        },
        {
            path: "/login",
            loader: () => {
                authService.login();
                return null;
            },
            element: <></>,
        },
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
