import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { number, object, setLocale, string } from "yup";
import { CustomerServiceFactory } from "../services/customers/CusomerServiceFactory";
import {
    CustomerAddressData,
    CustomerData,
} from "../services/customers/CustomerData";
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
    const [result, setResult] = useState({
        received: false,
        success: false,
        errorMessage: "",
    });
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm<CustomerData>({
        resolver: yupResolver(schema),
    });

    const fields = buildSaveCustomerFormFields(register, errors);
    const customerService = CustomerServiceFactory.getCustomerService();
    const showSuccessMessagae = result.received && result.success;
    const showErrorMessage = result.received && !result.success;

    async function submit(data: CustomerData) {
        const response = await customerService.save(data);

        if (response.success) {
            setResult({ ...result, received: true, success: true });
            return;
        }

        setResult({
            received: true,
            success: false,
            errorMessage: response.error?.message || "",
        });
    }

    function clearResultError() {
        setResult({ received: false, success: false, errorMessage: "" });
    }

    return {
        isLoading,
        showSuccessMessagae,
        showErrorMessage,
        errorMessage: result.errorMessage,
        customerFields: fields,
        submit: handleSubmit(submit),
        clearResultError,
    };
}
