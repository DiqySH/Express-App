import express from "express";
import {
  addProductHandler,
  deleteProductById,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
} from "../handler/productHandler.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProductsHandler);
productRouter.get("/products/:productId", getProductByIdHandler);
productRouter.post("/products", addProductHandler);
productRouter.put("/products/:productId", updateProductByIdHandler);
productRouter.delete("/products/:productId", deleteProductById);

export default productRouter;
