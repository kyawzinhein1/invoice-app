const express = require("express");
const app = express();


// routes import
const invoiceRoutes = require("./routes/invoices");
const customerRoutes = require("./routes/customer");

app.use(express.json());

// routes define
app.use("/api/invoices", invoiceRoutes);
app.use("/add-customer", customerRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));
