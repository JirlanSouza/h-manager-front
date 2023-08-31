import { CancelRounded, SaveRounded } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AddCustomerScreen() {
    const theme = useTheme();
    const navigate = useNavigate();

    function handleCancel() {
        navigate(-1);
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
                flexDirection="column"
                maxWidth={900}
            >
                <Box component="form" flexDirection="column" mb={3}>
                    <Typography variant="subtitle1">
                        Informações pessoais
                    </Typography>
                    <Grid container spacing={1} mb={3}>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                label="Nome"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                label="CPF"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                label="email"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                label="Tefefone"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="subtitle1">Endereço</Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                label="Rua"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                label="Nº"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                label="Bairro"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                label="Cep"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                variant="outlined"
                                label="Cidade"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                variant="outlined"
                                label="Estado"
                                size="small"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box display="flex" gap={3} justifyContent="end" mb={2}>
                    <Button
                        variant="outlined"
                        size="small"
                        startIcon={<CancelRounded />}
                        sx={{ minWidth: 100 }}
                        onClick={handleCancel}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<SaveRounded />}
                        sx={{ minWidth: 100 }}
                    >
                        Salvar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
