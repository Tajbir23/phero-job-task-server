const { client } = require("./mongodb");

const users = client.db("product-scope").collection("users");
const products = client.db("product-scope").collection("products");

module.exports = { users, products }