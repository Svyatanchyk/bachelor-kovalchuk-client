import * as yup from "yup";

export const signUpSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters")
    .test("has-number", "Password must contain at least one number", (value) =>
      /\d/.test(value || "")
    )
    .test(
      "has-uppercase",
      "Password must contain at least one uppercase letter",
      (value) => /[A-Z]/.test(value || "")
    )
    .test("has-symbol", "Password must contain at least one symbol", (value) =>
      /[!@#$%^&*(),.?":{}|<>]/.test(value || "")
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
