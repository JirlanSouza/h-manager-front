import { ApiGatway } from "../../common/api/ApiGatway";
import { Page, Pageable } from "../../models/Pagination";
import { CustomerData } from "../../models/customer/CustomerData";
import { CustomerSummary } from "../../models/customer/CustomerSummary";

export class CustomerService {
    constructor(private readonly apiGateway: ApiGatway) {}

    async save(customerData: CustomerData) {
        return await this.apiGateway.post<CustomerData, string>(
            "/customers",
            customerData
        );
    }

    async getSummary(pageable: Pageable) {
        return await this.apiGateway.get<Page<CustomerSummary>>(
            "/customers",
            pageable
        );
    }
}
