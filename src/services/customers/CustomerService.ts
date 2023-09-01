import { ApiGatway } from "../../common/api/ApiGatway";
import { CustomerData } from "./CustomerData";

export class CustomerService {
    constructor(private readonly apiGateway: ApiGatway) {}

    async save(customerData: CustomerData) {
        return await this.apiGateway.post<CustomerData, string>(
            "/customers",
            customerData
        );
    }
}
