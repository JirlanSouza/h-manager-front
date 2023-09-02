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
            ...register("address.street"),
            error: errors.address?.street !== undefined,
            helperText: errors.address?.street?.message,
        },
        houseNumber: {
            ...register("address.houseNumber"),
            error: errors.address?.houseNumber !== undefined,
            helperText: errors.address?.houseNumber?.message,
        },
        neighborhood: {
            ...register("address.neighborhood"),
            error: errors.address?.neighborhood !== undefined,
            helperText: errors.address?.neighborhood?.message,
        },
        zipCode: {
            ...register("address.zipCode"),
            error: errors.address?.zipCode !== undefined,
            helperText: errors.address?.zipCode?.message,
        },
        city: {
            ...register("address.city"),
            error: errors.address?.city !== undefined,
            helperText: errors.address?.city?.message,
        },
        state: {
            ...register("address.state"),
            error: errors.address?.state !== undefined,
            helperText: errors.address?.state?.message,
        },
        country: {
            ...register("address.country"),
            error: errors.address?.country !== undefined,
            helperText: errors.address?.country?.message,
        },
    };
}
