const express = require("express");
const app = express();

const cors = require("cors")();

const productRoutes = require("./routes/productRoutes");

app.use(cors)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(productRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
