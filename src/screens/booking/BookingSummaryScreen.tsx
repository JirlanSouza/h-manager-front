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
import { NavigationPath } from "../../navigation/navigations";

export function BookingSummaryScreen() {
    const theme = useTheme();
    const navigate = useNavigate();

    function handleNavigation(path: NavigationPath) {
        navigate(path);
    }

    return (
        <Page title="Reservas">
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
                            <TableCell>Cliente</TableCell>
                            <TableCell align="center">Diárias</TableCell>
                            <TableCell align="center">Check-in</TableCell>
                            <TableCell align="center">Check-out</TableCell>
                            <TableCell align="right">Data da reserva</TableCell>
                        </>
                    }
                    content={<></>}
                />
            </Box>
        </Page>
    );
}
