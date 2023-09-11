import { useState } from "react";
import { useAppSnackbar } from "../common/hooks/useAppSnackbar";
import { useQuery } from "../common/hooks/useQuery";
import { Page, Pageable } from "../models/Pagination";
import { CustomerSummary } from "../models/customer/CustomerSummary";
import { CustomerServiceFactory } from "../services/customers/CusomerServiceFactory";

export function useCustomerSummaryViewModel() {
    const { enqueueErrorSnackBar } = useAppSnackbar();
    const [selectedCustomer, setSelectedCustomer] = useState(-1);
    const [pageable, setPageable] = useState<Pageable>({ page: 0, size: 20 });
    const customerService = CustomerServiceFactory.getCustomerService();

    const { isLoading, isError, data } = useQuery<Page<CustomerSummary>>(
        ["customersSummary", pageable],
        async () => await customerService.getSummary(pageable)
    );

    if (data?.success && data.data) {
        data.data.content = data.data.content.map((c) => ({
            ...c,
            customerSince: new Date(c.customerSince || ""),
        }));
    }

    if (!isLoading && isError) {
        enqueueErrorSnackBar(
            data?.error?.message ||
                "Aconteceu um erro ao buscar a lista de clientes!"
        );
    }

    function handlePageChange(pageNumber: number) {
        setPageable({ ...pageable, page: pageNumber });
    }

    function handlePageSizeChange(pageSize: number) {
        setPageable({ ...pageable, size: pageSize });
    }

    return {
        customersPage: data?.data,
        selectedCustomer,
        onSelectCustomer: setSelectedCustomer,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange,
    };
}
