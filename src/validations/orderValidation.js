import Joi from "joi";
import mongoose from "mongoose";

const objectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error("any.invalid");
  }
  return value;
};

export const orderSchema = Joi.object({
  user: Joi.string().custom(objectId).required(),
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().custom(objectId).required(),
        quantity: Joi.number().integer().min(1).required(),
      })
    )
    .min(1)
    .required(),
  deliveryAddress: Joi.string().min(5).required(),
  totalPrice: Joi.number().positive().required(),
  courier: Joi.string().custom(objectId).optional(),
});
