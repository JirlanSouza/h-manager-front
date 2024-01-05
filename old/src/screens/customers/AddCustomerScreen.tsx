import { CancelRounded, SaveRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Form } from "../../common/components/Form";
import { FormFieldSet } from "../../common/components/FormFieldSet";
import { FormInput } from "../../common/components/FormInput";
import { Page } from "../../common/components/Page";
import { GO_BACK } from "../../navigation/navigations";
import { AddCustomersViewModel } from "../../viewModels/AddcustomerViewModel";

export function AddCustomerScreen() {
    const navigate = useNavigate();
    const { getFieldState, submit } = AddCustomersViewModel();

    function handleCancel() {
        navigate(GO_BACK);
    }

    return (
        <Page title="Adicionar novo cliente">
            <Form
                sx={{ mt: 2 }}
                submitButton={
                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<SaveRounded />}
                        enableMinWidth
                    >
                        Salvar
                    </Button>
                }
                cancelButton={
                    <Button
                        startIcon={<CancelRounded />}
                        enableMinWidth
                        onClick={handleCancel}
                    >
                        Cancelar
                    </Button>
                }
                onSubmit={submit}
            >
                <FormFieldSet title="Informações pessoais">
                    <FormInput
                        label="Nome"
                        xs={12}
                        sm={8}
                        fieldState={getFieldState("name")}
                    />

                    <FormInput
                        label="CPF"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("cpf")}
                    />

                    <FormInput
                        label="email"
                        xs={12}
                        sm={8}
                        fieldState={getFieldState("email")}
                    />

                    <FormInput
                        label="Tefefone"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("telephone")}
                    />
                </FormFieldSet>

                <FormFieldSet title="Endereço">
                    <FormInput
                        label="Rua"
                        xs={12}
                        sm={8}
                        fieldState={getFieldState("address.street")}
                    />

                    <FormInput
                        label="Nº"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("address.houseNumber")}
                    />

                    <FormInput
                        label="Bairro"
                        xs={12}
                        sm={8}
                        fieldState={getFieldState("address.neighborhood")}
                    />

                    <FormInput
                        label="Cep"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("address.zipCode")}
                    />

                    <FormInput
                        label="Cidade"
                        xs={12}
                        sm={8}
                        fieldState={getFieldState("address.city")}
                    />

                    <FormInput
                        label="Estado"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("address.state")}
                    />

                    <FormInput
                        label="Paíz"
                        xs={12}
                        sm={4}
                        fieldState={getFieldState("address.country")}
                    />
                </FormFieldSet>
            </Form>
        </Page>
    );
}
