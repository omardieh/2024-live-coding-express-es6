const express = require("express");
const morgan = require("morgan");

const products = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
];
const app = express();
app.use(morgan("dev"));

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productID", (req, res) => {
  // req.params.productID
  const { productID } = req.params;
  //   const foundProduct = products.find((product) => product.id == productID);
  //   const foundProduct = products.find((product) => product.id === +productID);
  //   const foundProduct = products.find((product) => product.id === Number(productID));
  const foundProduct = products.find(
    (product) => product.id === parseInt(productID)
  );
  res.json(foundProduct);
});

const port = 3000;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info(`App is running, please visit : http://localhost:` + port);
});
