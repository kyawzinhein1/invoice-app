const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new product
const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, price },
    });
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
    console.log(error);
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
