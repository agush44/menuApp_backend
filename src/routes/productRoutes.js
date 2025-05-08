import { Router } from "express";
import {
  getProducts,
  getPromotionProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
//import { authToken } from "../middleware/authMiddleware.js";
import validate from "../validations/validate.js";
import { productSchema } from "../validations/productValidation.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.get("/promotions", getPromotionProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", validate(productSchema), createProduct);
productRoutes.put("/:id", validate(productSchema), updateProduct);
productRoutes.delete("/:id", deleteProduct);

export { productRoutes };
