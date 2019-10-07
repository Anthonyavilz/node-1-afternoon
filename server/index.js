const express = require("express");
const products = require("../products.json");
const getProducts = require("./getProducts");
 
const app = express();

app.get("/api/products", getProducts);


app.listen(4000, () => {
    console.log("Running on port 4000");
});