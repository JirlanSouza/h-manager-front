import ReactDOM from "react-dom/client";
import { AppWrapper } from "./app/AppWrapper";
import { ApiGatway } from "./common/api/ApiGatway";
import { ServicesFactory } from "./services/ServicesFactory";

export class App {
    init() {
        ServicesFactory.init(ApiGatway.getInstance());
    }

    initRender() {
        ReactDOM.createRoot(document.getElementById("root")!).render(
            AppWrapper()
        );
    }
}
