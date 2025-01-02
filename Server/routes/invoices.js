const express = require("express");
const router = express.Router();
const inVoiceController = require("../controllers/invoices");

// POST /get-invoices
router.post("/", inVoiceController.createInvoice);

module.exports = router;
