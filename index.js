import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

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
  //   const productID = req.params.productID
  const { productID } = req.params;
  console.log(productID);
  //   const foundProduct = products.find((product) => product.id == productID);
  //   const foundProduct = products.find((product) => product.id === +productID);
  //   const foundProduct = products.find((product) => product.id === Number(productID));
  const foundProduct = products.find(
    (product) => product.id === parseInt(productID)
  );
  res.json(foundProduct);
});

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info(`App is running, please visit : http://localhost:` + port);
});
