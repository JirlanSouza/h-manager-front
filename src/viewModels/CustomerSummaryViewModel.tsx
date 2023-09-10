import { useEffect, useState } from "react";
import { Page, Pageable } from "../models/Pagination";
import { CustomerSummary } from "../models/customer/CustomerSummary";
import { CustomerServiceFactory } from "../services/customers/CusomerServiceFactory";

export function useCustomerSummaryViewModel() {
    const [selectedCustomer, setSelectedCustomer] = useState(-1);
    const [pageable, setPageable] = useState<Pageable>({ page: 0, size: 20 });
    const [customersPage, setCustomersPage] = useState<Page<CustomerSummary>>({
        number: 0,
        size: 0,
        totalItems: 0,
        isFirst: true,
        isLast: true,
        isEmpty: true,
        content: [],
    });

    useEffect(() => {
        (async () => {
            const result =
                await CustomerServiceFactory.getCustomerService().getSummary(
                    pageable
                );

            if (result.success && result.data) {
                result.data.content = result.data.content.map((c) => ({
                    ...c,
                    customerSince: new Date(c.customerSince || undefined),
                }));
                setCustomersPage(result.data);
                console.log(result.data);
            }
        })();
    }, [pageable]);

    function handlePageChange(pageNumber: number) {
        setPageable({ ...pageable, page: pageNumber });
    }

    function handlePageSizeChange(pageSize: number) {
        setPageable({ ...pageable, size: pageSize });
    }

    return {
        customersPage,
        selectedCustomer,
        onSelectCustomer: setSelectedCustomer,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange,
    };
}
