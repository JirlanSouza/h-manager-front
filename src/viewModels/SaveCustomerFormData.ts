import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CustomerData } from "../services/customers/CustomerData";

export function buildSaveCustomerFormFields(
    register: UseFormRegister<CustomerData>,
    errors: FieldErrors<CustomerData>
) {
    return {
        name: {
            ...register("name"),
            error: errors.name !== undefined,
            helperText: errors.name?.message,
        },
        cpf: {
            ...register("cpf"),
            error: errors.cpf !== undefined,
            helperText: errors.cpf?.message,
        },
        email: {
            ...register("email"),
            error: errors.email !== undefined,
            helperText: errors.email?.message,
        },
        telephone: {
            ...register("telephone"),
            error: errors.telephone !== undefined,
            helperText: errors.telephone?.message,
        },
        street: {
            ...register("street"),
            error: errors.street !== undefined,
            helperText: errors.street?.message,
        },
        houseNumber: {
            ...register("houseNumber"),
            error: errors.houseNumber !== undefined,
            helperText: errors.houseNumber?.message,
        },
        neighborhood: {
            ...register("neighborhood"),
            error: errors.neighborhood !== undefined,
            helperText: errors.neighborhood?.message,
        },
        zipCode: {
            ...register("zipCode"),
            error: errors.zipCode !== undefined,
            helperText: errors.zipCode?.message,
        },
        city: {
            ...register("city"),
            error: errors.city !== undefined,
            helperText: errors.city?.message,
        },
        state: {
            ...register("state"),
            error: errors.state !== undefined,
            helperText: errors.state?.message,
        },
        country: {
            ...register("country"),
            error: errors.country !== undefined,
            helperText: errors.country?.message,
        },
    };
}
