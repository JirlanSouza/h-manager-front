import { useState } from "react";
import { useAppSnackbar } from "../common/hooks/useAppSnackbar";
import { useQuery } from "../common/hooks/useQuery";
import { Page, Pageable, SortBy } from "../models/Pagination";
import { CustomerSummary } from "../models/customer/CustomerSummary";
import { PageableImpl } from "../models/pagination/Pageable";
import { SortImpl } from "../models/pagination/Sort";
import { CustomerServiceFactory } from "../services/customers/CusomerServiceFactory";

export function useCustomerSummaryViewModel() {
    const { enqueueErrorSnackBar } = useAppSnackbar();
    const [selectedCustomer, setSelectedCustomer] = useState(-1);
    const [pageable, setPageable] = useState<Pageable<CustomerSummary>>(
        PageableImpl.default(new SortImpl<CustomerSummary>("name"))
    );
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

    function handleSortChange(by: SortBy<CustomerSummary>) {
        const direction = pageable?.sort?.direction === "asc" ? "desc" : "asc";
        setPageable(PageableImpl.default(new SortImpl(by, direction)));
    }

    return {
        pageable,
        selectedCustomer,
        customersPage: data?.data,
        onSelectCustomer: setSelectedCustomer,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange,
        onSortChange: handleSortChange,
    };
}
