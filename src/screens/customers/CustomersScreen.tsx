import {
    AddRounded,
    EditRounded,
    RemoveCircleRounded,
    ViewAgendaRounded,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Page } from "../../common/components/Page";
import { NavigationPath } from "../../navigation/navigations";

export function CustomersScreen() {
    const theme = useTheme();
    const navigate = useNavigate();

    function handleNavigation(path: NavigationPath) {
        navigate(path);
    }

    function makeList() {
        const background = (i: number) =>
            i % 2
                ? theme.palette.background.default
                : theme.palette.action.hover;

        return Array(40)
            .fill(0)
            .map((_, i) => {
                return (
                    <Box
                        key={i}
                        flex={1}
                        sx={{
                            height: theme.spacing(4),
                            background: background(i),
                        }}
                    />
                );
            });
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

                <Box
                    component="div"
                    borderRadius={theme.shape.borderRadius + "px"}
                    border={`1px solid ${theme.palette.divider}`}
                    overflow="auto"
                >
                    {makeList()}
                </Box>
            </Box>
        </Page>
    );
}
