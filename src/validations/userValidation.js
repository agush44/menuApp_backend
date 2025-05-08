import Joi from "joi";

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  address: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("customer", "admin").optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
