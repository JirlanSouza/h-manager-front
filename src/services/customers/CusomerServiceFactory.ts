import { CustomerService } from "./CustomerService";

export class CustomerServiceFactory {
    private static customerService: CustomerService;
    static setCustomerService(customerService: CustomerService) {
        CustomerServiceFactory.customerService = customerService;
    }

    static getCustomerService(): CustomerService {
        return CustomerServiceFactory.customerService;
    }
}
