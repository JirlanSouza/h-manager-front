import {
    AddRounded,
    EditRounded,
    RemoveCircleRounded,
    ViewAgendaRounded,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

        return Array(20)
            .fill(0)
            .map((_, i) => {
                return (
                    <Box
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
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: theme.palette.action.hover,
                borderRadius: theme.shape.borderRadius + "px",
                m: 1,
                p: 2,
                pt: 1,
            }}
        >
            <Typography variant="h6" fontWeight="semi-bold" mb={2}>
                Clientes
            </Typography>
            <Box
                component="div"
                display="flex"
                flex={1}
                flexDirection="column"
                maxWidth={900}
            >
                <Box display="flex" gap={1} justifyContent="end" mb={2}>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: "auto" }}
                        startIcon={<ViewAgendaRounded />}
                    >
                        Visualizar
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<EditRounded />}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<RemoveCircleRounded />}
                    >
                        Remover
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
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
                    overflow="hidden"
                >
                    {makeList()}
                </Box>
            </Box>
        </Box>
    );
}
