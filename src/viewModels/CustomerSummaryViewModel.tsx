import { useState } from "react";
import { CustomerSummary } from "../models/customer/CustomerSummary";

export function useCustomerSummaryViewModel() {
    const [selectedCustomer, setSelectedCustomer] = useState(-1);
    const [customers] = useState<CustomerSummary[]>(
        new Array(28).fill({
            id: "asgsdhfk" + Math.random(),
            name: "Joe Jho",
            email: "joejho@hmanager.com",
            cpf: "123.456.789-12",
            customerSince: new Date("2019-05-17"),
        })
    );

    return {
        page: 1,
        itemsPerPage: 20,
        pagesCount: 1,
        totalItems: 20,
        customers,
        selectedCustomer,
        onSelectCustomer: setSelectedCustomer,
    };
}
