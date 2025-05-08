import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    available: { type: Boolean, default: true },
    promotion: {
      isActive: { type: Boolean, default: false },
      discountPercentage: { type: Number, min: 0, max: 100 },
    },
  },
  { versionKey: false, timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
