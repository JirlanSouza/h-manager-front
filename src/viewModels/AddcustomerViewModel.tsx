import { useNavigate } from "react-router-dom";
import { useAppForm } from "../common/hooks/FormState";
import { useAppSnackbar } from "../common/hooks/useAppSnackbar";
import { number, object, string } from "../config/yupConfig";
import {
    CustomerAddressData,
    CustomerData,
} from "../models/customer/CustomerData";
import { CustomerServiceFactory } from "../services/customers/CusomerServiceFactory";

const schema = object<CustomerData>().shape({
    name: string().label("O nome").required().min(3),
    cpf: string().label("O CPF").required().min(14, "O ${path} está inválido"),
    email: string().required().email(),
    telephone: number().label("O telefone").required().positive().integer(),
    address: object<CustomerAddressData>()
        .shape({
            street: string().label("A rua").required().min(3),
            houseNumber: string().label("O número").required().min(3),
            neighborhood: string().label("O bairo").required().min(3),
            zipCode: string().label("O CEP").required().min(3),
            city: string().label("A cidade").required().min(3),
            state: string().label("O estado").required().min(2),
            country: string().label("O paíz").required().min(3),
        })
        .required(),
});

export function AddCustomersViewModel() {
    const navigate = useNavigate();
    const { enqueueSuccessSnackBar, enqueueErrorSnackBar } = useAppSnackbar();

    const form = useAppForm<CustomerData>(schema);
    const customerService = CustomerServiceFactory.getCustomerService();

    async function submit(data: CustomerData) {
        const response = await customerService.save(data);

        if (response.success) {
            enqueueSuccessSnackBar("Cliente adicionado com sucesso!");
            navigate(-1);
            return;
        }

        enqueueErrorSnackBar(
            response.error?.message ||
                "Aconteceu um erro ao adicionar o cliente!"
        );
    }

    return {
        isLoading: form.isLoading,
        getFieldState: form.getFormField,
        submit: form.handleSubmit(submit),
    };
}
