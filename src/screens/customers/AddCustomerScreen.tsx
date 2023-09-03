import { CancelRounded, SaveRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Form } from "../../common/components/Form";
import { FormFieldSet } from "../../common/components/FormFieldSet";
import { FormInput } from "../../common/components/FormInput";
import { Page } from "../../common/components/Page";
import { AddCustomersViewModel } from "../../viewModels/AddcustomerViewModel";

export function AddCustomerScreen() {
    const navigate = useNavigate();
    const { customerFields, submit } = AddCustomersViewModel();

    function handleCancel() {
        navigate(-1);
    }

    return (
        <Page title="Adicionar novo cliente">
            <Form
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
                        fieldState={customerFields.name}
                    />

                    <FormInput
                        label="CPF"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.cpf}
                    />

                    <FormInput
                        label="email"
                        xs={12}
                        sm={8}
                        fieldState={customerFields.email}
                    />

                    <FormInput
                        label="Tefefone"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.telephone}
                    />
                </FormFieldSet>

                <FormFieldSet title="Endereço">
                    <FormInput
                        label="Rua"
                        xs={12}
                        sm={8}
                        fieldState={customerFields.street}
                    />

                    <FormInput
                        label="Nº"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.houseNumber}
                    />

                    <FormInput
                        label="Bairro"
                        xs={12}
                        sm={8}
                        fieldState={customerFields.neighborhood}
                    />

                    <FormInput
                        label="Cep"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.zipCode}
                    />

                    <FormInput
                        label="Cidade"
                        xs={12}
                        sm={8}
                        fieldState={customerFields.city}
                    />

                    <FormInput
                        label="Estado"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.state}
                    />

                    <FormInput
                        label="Paíz"
                        xs={12}
                        sm={4}
                        fieldState={customerFields.country}
                    />
                </FormFieldSet>
            </Form>
        </Page>
    );
}
