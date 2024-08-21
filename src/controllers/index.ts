import { Router } from "express";
import productController from "./productController";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    name: "Mariano Bocchini",
    email: "marianobocchini21@gmail.com",
  });
});

router.use("/", productController);


export default router;