import ReactDOM from "react-dom/client";
import { AppWrapper } from "./app/AppWrapper";
import { ApiGatway } from "./common/api/ApiGatway";
import { createAxiosInstance } from "./config/axiosConfig";
import { ServicesFactory } from "./services/ServicesFactory";

export class App {
    init() {
        const axiosInstace = createAxiosInstance(
            import.meta.env.VITE_API_BASE_URL
        );

        ServicesFactory.init(new ApiGatway(axiosInstace));
    }

    initRender() {
        ReactDOM.createRoot(document.getElementById("root")!).render(
            AppWrapper()
        );
    }
}
