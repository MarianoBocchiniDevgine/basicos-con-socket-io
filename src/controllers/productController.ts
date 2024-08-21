import { Router } from "express";
import Products from "../models/products";

const router = Router();

router.post("/products", async (req, res) => {
  const { name, description } = req.body;
  try {
    const product = await Products.create({
      name,
      description,
    });
    res.status(201).send({ message: "Product successfully registered" });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Products.findAll();

    res.json(products);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

export default router;
