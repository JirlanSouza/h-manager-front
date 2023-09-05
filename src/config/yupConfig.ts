import { setLocale } from "yup";

setLocale({
    mixed: {
        required: "${path} é obrigatório",
    },
    string: {
        min: "${path} deve ter no mínimo ${min} caracteres",
    },
});

export * from "yup";
