import { useNavigate } from "react-router-dom";
import { useAppForm } from "../common/hooks/FormState";
import { useAppSnackbar } from "../common/hooks/useAppSnackbar";
import { boolean, number, object, string } from "../config/yupConfig";
import { AddRoomData } from "../models/room/Room";
import { GO_BACK } from "../navigation/navigations";
import { ServicesFactory } from "../services/ServicesFactory";

const addRoomDataSchema = object<AddRoomData>().shape({
    number: string().label("O numero do quarto").required().max(5),
    doubleBeds: number()
        .label("A Qtd. de camas de casal")
        .required()
        .min(0)
        .transform((v) => (isNaN(v) ? null : parseInt(v))),
    singleBeds: number()
        .label("A Qtd. de camas de solteiro")
        .required()
        .min(0)
        .transform((v) => (isNaN(v) ? null : parseInt(v))),
    dailyRate: number()
        .label("O valor da diária")
        .required()
        .positive()
        .transform((v) => (isNaN(v) ? null : parseFloat(v))),
    available: boolean().label("está disponível").default(false),
});

export function useAddRoomViewModel() {
    const navigate = useNavigate();
    const { enqueueSuccessSnackBar, enqueueErrorSnackBar } = useAppSnackbar();
    const addRoomForm = useAppForm(addRoomDataSchema);
    const roomService = ServicesFactory.getRoomService();

    async function submitForm(roomData: AddRoomData) {
        const response = await roomService.save(roomData);

        if (response.success) {
            enqueueSuccessSnackBar("Quarto adicionado com sucesso!");
            navigate(GO_BACK);
            return;
        }

        enqueueErrorSnackBar(
            response.error?.message ||
                "Aconteceu um erro ao adicionar o quarto!"
        );
    }

    return {
        isLoading: addRoomForm.isLoading,
        getFieldState: addRoomForm.getFormField,
        submit: addRoomForm.handleSubmit(submitForm),
    };
}
