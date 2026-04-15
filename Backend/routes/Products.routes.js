import express from "express";

import { createProduct, deleteProduct, updatedProduct, getProducts } from "../Controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);

router.post("/",createProduct);

router.delete("/:id",deleteProduct);

router.put("/:id", updatedProduct);

export default router;
