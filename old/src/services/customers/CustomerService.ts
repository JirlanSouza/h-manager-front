import { ApiGatway } from "../../common/api/ApiGatway";
import { Page, Pageable } from "../../models/Pagination";
import { CustomerData } from "../../models/customer/CustomerData";
import { CustomerSummary } from "../../models/customer/CustomerSummary";

export class CustomerService {
    constructor(private readonly apiGateway: ApiGatway) {}

    async save(customerData: CustomerData) {
        return await this.apiGateway.post<string, CustomerData>(
            "/customers",
            customerData
        );
    }

    async getSummary(pageable: Pageable<CustomerSummary>) {
        return await this.apiGateway.get<
            CustomerSummary,
            Page<CustomerSummary>
        >("/customers", pageable);
    }
}
