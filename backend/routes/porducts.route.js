import express from "express";
import { Products } from "../controllers/products.controllers.js";

const router = express.Router();

router.route("/products/new").get(Products.createProduct);
router.route("/products/all").get(Products.getAllProducts);
router.route("/products/single").get(Products.getProductById);
router.route("/products/update").get(Products.updateProduct);
router.route("/products/delete").get(Products.deleteProduct);

export default router;
