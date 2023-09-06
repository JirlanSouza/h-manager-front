import {
    AddRounded,
    EditRounded,
    RemoveCircleRounded,
    ViewAgendaRounded,
} from "@mui/icons-material";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Page } from "../../common/components/Page";
import { NavigationPath } from "../../navigation/navigations";
import { useCustomerSummaryViewModel } from "../../viewModels/CustomerSummaryViewModel";

export function CustomersScreen() {
    const theme = useTheme();
    const navigate = useNavigate();
    const {
        customers,
        page,
        itemsPerPage: itemsperPage,
        totalItems,
        selectedCustomer,
        onSelectCustomer,
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

                <Paper
                    elevation={0}
                    sx={{
                        position: "relative",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        overflow: "hidden",
                    }}
                >
                    <TableContainer sx={{ flex: 1 }}>
                        <Table
                            stickyHeader
                            sx={{
                                minWidth: 650,
                            }}
                            size="small"
                        >
                            <TableHead>
                                <TableRow
                                    sx={{
                                        "& td, & th": {
                                            borderBottom:
                                                `1px solid ` +
                                                theme.palette.divider,
                                        },
                                    }}
                                >
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="center">E-mail</TableCell>
                                    <TableCell align="center">CPF</TableCell>
                                    <TableCell align="right">
                                        Cliente desde
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((custumer, i) => (
                                    <TableRow
                                        key={custumer.id}
                                        hover
                                        selected={i === selectedCustomer}
                                        sx={{
                                            "& td, & th": {
                                                borderBottom:
                                                    `1px solid ` +
                                                    theme.palette.divider,
                                            },
                                            "&:hover": {
                                                cursor: "pointer",
                                            },
                                        }}
                                        onClick={() => onSelectCustomer(i)}
                                    >
                                        <TableCell>{custumer.name}</TableCell>
                                        <TableCell align="center">
                                            {custumer.email}
                                        </TableCell>
                                        <TableCell align="center">
                                            {custumer.cpf}
                                        </TableCell>
                                        <TableCell align="right">
                                            {custumer.customerSince.toLocaleDateString(
                                                "pt-br"
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 20, 25]}
                        component="div"
                        count={totalItems + 200}
                        rowsPerPage={itemsperPage}
                        page={page}
                        showFirstButton
                        showLastButton
                        labelRowsPerPage="Items por página"
                        labelDisplayedRows={({ from, to, count }) =>
                            `${from} - ${to} de ${count}`
                        }
                        onPageChange={() => {}}
                        onRowsPerPageChange={() => {}}
                    />
                </Paper>
            </Box>
        </Page>
    );
}
