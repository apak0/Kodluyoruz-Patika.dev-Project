import React from "react";
import * as yup from "yup";

const validations = yup.object({
  email: yup.string().email("Geçerli bir email girin").required("Zorunlu alan"),
  password: yup
    .string()
    .min(5, "Parolanız en az 5 karakter olmalıdır")
    .max(7, "Parolanız 7 karakterden fazla olamaz")
    .required("Zorunlu alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan"),
});

export default validations;
