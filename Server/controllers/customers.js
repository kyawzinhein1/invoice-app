const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create customer
exports.createCustomer = async (req, res) => {
  console.log("Received body:", req.body); // Log the request body
  try {
    const { name, email } = req.body;

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({
      message: "Customer successfully created.",
      customer,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
