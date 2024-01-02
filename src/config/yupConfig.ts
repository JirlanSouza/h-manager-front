import { setLocale } from "yup";

setLocale({
    mixed: {
        required: "${path} é obrigatório",
    },
    string: {
        min: "${path} deve ter no mínimo ${min} caracteres",
    },
    number: {
        min: "${path} deve ser um valor de no minimo ${min}",
        positive: "${path} não pode ser um valor negativo",
    },
});

export const currencyNumber = (v: string) => parseFloat(v.replace("R$", ""));
export * from "yup";
