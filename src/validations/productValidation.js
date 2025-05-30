import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(5).required(),
  price: Joi.number().positive().required(),
  category: Joi.string().required(),
  image: Joi.string().uri().optional(),
  available: Joi.boolean().optional(),
  promotion: Joi.object({
    isActive: Joi.boolean().required(),
    discountPercentage: Joi.number().min(0).max(100).required(),
  }).optional(),
}).options({ allowUnknown: false });
