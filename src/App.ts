import axios from "axios";
import ReactDOM from "react-dom/client";
import { AppWrapper } from "./app/AppWrapper";
import { ApiGatway } from "./common/api/ApiGatway";
import { CustomerServiceFactory } from "./services/customers/CusomerServiceFactory";
import { CustomerService } from "./services/customers/CustomerService";

export class App {
    init() {
        const axiosInstace = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
        });
        const apiGatway = new ApiGatway(axiosInstace);
        const customerService = new CustomerService(apiGatway);
        CustomerServiceFactory.setCustomerService(customerService);
    }

    initRender() {
        ReactDOM.createRoot(document.getElementById("root")!).render(
            AppWrapper()
        );
    }
}
