const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

// Create a new product
router.post("/", createProduct);

// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:id", getProductById);

// Export the router
module.exports = router;
