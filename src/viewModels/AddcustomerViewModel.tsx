import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { number, object, setLocale, string } from "yup";
import { CustomerData } from "../services/customers/CustomerData";
import { buildSaveCustomerFormFields } from "./SaveCustomerFormData";

setLocale({
    mixed: {
        required: "${path} é obrigatório",
    },
    string: {
        min: "${path} deve ter no mínimo ${min} caracteres",
    },
});

const schema = object<CustomerData>().shape({
    name: string().label("O nome").required().min(3),
    cpf: string().label("O CPF").required().min(14, "O ${path} está inválido"),
    email: string().required().email(),
    telephone: number().label("O telefone").required().positive().integer(),
    street: string().label("A rua").required().min(3),
    houseNumber: string().label("O número").required().min(3),
    neighborhood: string().label("O bairo").required().min(3),
    zipCode: string().label("O CEP").required().min(3),
    city: string().label("A cidade").required().min(3),
    state: string().label("O estado").required().min(3),
    country: string().label("O paíz").required().min(3),
});

export function AddCustomersViewModel() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CustomerData>({
        resolver: yupResolver(schema),
    });

    const fields = buildSaveCustomerFormFields(register, errors);

    function submit(data: CustomerData) {
        console.log(data);
    }

    return {
        customerFields: fields,
        submit: handleSubmit(submit),
    };
}
