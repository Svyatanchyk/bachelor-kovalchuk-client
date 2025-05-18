import * as yup from "yup";

export const validation = yup.object({
  oldPassword: yup.string().required("Це поле обов'язкове"),
  newPassword: yup
    .string()
    .required("Це поле обов'язкове")
    .min(8, "Пароль повинен бути не менше 8 символів")
    .test("has-number", "Пароль повинен містити принаймі одну цифру", (value) =>
      /\d/.test(value || "")
    )
    .test(
      "has-uppercase",
      "Пароль повинен містити принаймі одну літеру верхього регістру",
      (value) => /[A-Z]/.test(value || "")
    )
    .test(
      "has-symbol",
      "Пароль повинен містити принаймі один символ",
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value || "")
    ),
  repeatNewPassword: yup
    .string()
    .required("Це поле обов'язкове")
    .min(8, "Пароль повинен бути не менше 8 символів")
    .test("has-number", "Пароль повинен містити принаймі одну цифру", (value) =>
      /\d/.test(value || "")
    )
    .test(
      "has-uppercase",
      "Пароль повинен містити принаймі одну літеру верхього регістру",
      (value) => /[A-Z]/.test(value || "")
    )
    .test(
      "has-symbol",
      "Пароль повинен містити принаймі один символ",
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value || "")
    )
    .oneOf([yup.ref("newPassword")], "Паролі не співпадають"),
});
