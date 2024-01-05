import { CancelRounded, SaveRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Form } from "../../common/components/Form";
import { FormCheckbox } from "../../common/components/FormCheckbox";
import { FormFieldSet } from "../../common/components/FormFieldSet";
import { FormInputMasked } from "../../common/components/FormInputMask";
import { FormInputNumber } from "../../common/components/FormInputNumber";
import { Page } from "../../common/components/Page";
import { GO_BACK } from "../../navigation/navigations";
import { useAddRoomViewModel } from "../../viewModels/AddRoomViewModel";

export function AddRoomScreen() {
    const navigate = useNavigate();
    const { getFieldState, submit } = useAddRoomViewModel();

    function handleCancel() {
        navigate(GO_BACK);
    }

    return (
        <Page title="Adicionar novo quarto">
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
                <FormFieldSet title="Dados do quarto">
                    <FormInputMasked
                        label="Numero do quarto"
                        mask="99999"
                        replacement={{ 9: /\d/ }}
                        xs={12}
                        sm={6}
                        fieldState={getFieldState("number")}
                    />

                    <FormInputMasked
                        label="Qtd. camas de casal"
                        mask="99"
                        replacement={{ 9: /\d/ }}
                        xs={12}
                        sm={6}
                        fieldState={getFieldState("doubleBeds")}
                    />

                    <FormInputMasked
                        label="Qtd. camas de solteiro"
                        mask="99"
                        replacement={{ 9: /\d/ }}
                        xs={12}
                        sm={6}
                        fieldState={getFieldState("singleBeds")}
                    />

                    <FormInputNumber
                        label="Valor por diára"
                        locales="pt-br"
                        format="currency"
                        currency="BRL"
                        xs={12}
                        sm={6}
                        fieldState={getFieldState("dailyRate")}
                    />

                    <FormCheckbox
                        label="O quarto está disponível?"
                        xs={12}
                        sm={6}
                        fieldState={getFieldState("available")}
                    />
                </FormFieldSet>
            </Form>
        </Page>
    );
}
