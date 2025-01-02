const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create invoice
exports.createInvoice = async (req, res) => {
  console.log("Received body:", req.body); // Log the request body
  try {
    const { customerId, productId, quantity } = req.body;

    // Check if customer exists
    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });

    console.log(customer);

    if (!customer) {
      return res.status(400).json({ error: "Customer not found." });
    }

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(400).json({ error: "Product not found." });
    }

    const invoice = await prisma.invoice.create({
      data: {
        customerId,
        productId,
        quantity,
      },
    });
    res.status(201).json({
      message: "Invoice successfully created.",
      invoice,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// exports.test = async (req, res) => {
//   return res.json({
//     message: "hello testing",
//   });
// };
