const express = require("express");
const Product = require("../models/Product");
const response = require("../functions/response");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).json(response.success(await Product.find({})));
  } catch (error) {
    res.status(500).json(response.error(error));
  }
});

router.get("/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    res.status(200).json(response.success(await Product.find({ _id })));
  } catch (error) {
    res.status(500).json(response.error(error));
  }
});

router.put("/add", async (req, res) => {
  const product = req.body;

  try {
    res.status(200).json(response.success(await new Product(product).save()));
  } catch (error) {
    res.status(500).json(response.error(error));
  }
});

router.patch("/update", async (req, res) => {
  const { _id } = req.body;
  
  try {
    res
      .status(200)
      .json(response.success(await Product.updateOne({ _id }, req.body)));
  } catch (error) {
    res.status(500).json(response.error(error));
  }
});

router.delete("/remove/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    res.status(200).json(response.success(await Product.deleteOne({ _id })));
  } catch (error) {
    res.status(500).json(response.error(error));
  }
});

module.exports = router;
