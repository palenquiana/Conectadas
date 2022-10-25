import * as yup from "yup";
import { FORMS_MESSAGES } from "../../../constants/forms";
export const validationSchema = yup.object().shape({
  birthdate: yup.date().required(FORMS_MESSAGES.REQUIRED),
  city: yup.string().required(FORMS_MESSAGES.REQUIRED).label("Selected city"),
  country: yup
    .string()
    .required(FORMS_MESSAGES.REQUIRED)
    .label("Selected country"),
  email: yup
    .string()
    .email(FORMS_MESSAGES.EMAIL)
    .required(FORMS_MESSAGES.REQUIRED),
  lastname: yup.string().required(FORMS_MESSAGES.REQUIRED),
  name: yup.string().required(FORMS_MESSAGES.REQUIRED),
  password: yup
    .string()
    .required(FORMS_MESSAGES.REQUIRED)
    .min(8, FORMS_MESSAGES.PASS_SIZE)
    .matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]/, FORMS_MESSAGES.PASS_MATCHES),
});
