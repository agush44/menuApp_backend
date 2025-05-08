import Joi from "joi";

// Reglas comunes para sanitización
const trimmedString = Joi.string().trim();

export const registerUserSchema = Joi.object({
  name: trimmedString.min(2).max(50).required(),
  email: trimmedString.email().required(),
  address: trimmedString.min(5).required(),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .message(
      "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
    )
    .required(),
  role: Joi.string().valid("customer", "admin").optional(),
}).options({ allowUnknown: false });

export const loginUserSchema = Joi.object({
  email: trimmedString.email().required(),
  password: Joi.string().required(), // Ya se validó en el registro; acá solo requerimos presencia.
}).options({ allowUnknown: false });
