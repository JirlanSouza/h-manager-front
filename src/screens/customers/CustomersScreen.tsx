import {
    AddRounded,
    EditRounded,
    RemoveCircleRounded,
    ViewAgendaRounded,
} from "@mui/icons-material";
import { Box, TableCell, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Page } from "../../common/components/Page";
import { Table } from "../../common/components/Table";
import { TableContentRow } from "../../common/components/TableContentRow";
import { TablePagination } from "../../common/components/TablePagination";
import { formatDate } from "../../common/formatters/formatDate";
import { NavigationPath } from "../../navigation/navigations";
import { useCustomerSummaryViewModel } from "../../viewModels/CustomerSummaryViewModel";

export function CustomersScreen() {
    const theme = useTheme();
    const navigate = useNavigate();
    const {
        customersPage,
        selectedCustomer,
        onSelectCustomer,
        onPageChange,
        onPageSizeChange,
    } = useCustomerSummaryViewModel();

    function handleNavigation(path: NavigationPath) {
        navigate(path);
    }

    return (
        <Page title="Clientes">
            <Box
                component="div"
                display="flex"
                flexGrow={1}
                flexDirection="column"
                maxWidth={theme.breakpoints.values.xl}
                overflow="hidden"
            >
                <Box display="flex" gap={1} justifyContent="end" mb={2}>
                    <Button
                        sx={{ mr: "auto" }}
                        startIcon={<ViewAgendaRounded />}
                    >
                        Visualizar
                    </Button>
                    <Button startIcon={<EditRounded />}>Editar</Button>
                    <Button startIcon={<RemoveCircleRounded />}>Remover</Button>
                    <Button
                        variant="contained"
                        startIcon={<AddRounded />}
                        onClick={() =>
                            handleNavigation(NavigationPath.CUSTOMERS_ADD)
                        }
                    >
                        Addicionar
                    </Button>
                </Box>

                <Table
                    columns={
                        <>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">E-mail</TableCell>
                            <TableCell align="center">CPF</TableCell>
                            <TableCell align="right">Cliente desde</TableCell>
                        </>
                    }
                    content={customersPage?.content.map((custumer, i) => (
                        <TableContentRow
                            key={custumer.id}
                            hover
                            selected={i === selectedCustomer}
                            onClick={() => onSelectCustomer(i)}
                        >
                            <TableCell>{custumer.name}</TableCell>
                            <TableCell align="center">
                                {custumer.email}
                            </TableCell>
                            <TableCell align="center">{custumer.cpf}</TableCell>
                            <TableCell align="right">
                                {formatDate(custumer.customerSince)}
                            </TableCell>
                        </TableContentRow>
                    ))}
                    pagination={
                        <TablePagination
                            itemsPerPageRange={[10, 15, 20]}
                            pageable={customersPage}
                            onPageChange={onPageChange}
                            onPageSizeChange={onPageSizeChange}
                        />
                    }
                />
            </Box>
        </Page>
    );
}
