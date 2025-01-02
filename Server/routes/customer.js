const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers");

// POST /get-invoices
router.post("/", customerController.createCustomer);

module.exports = router;
