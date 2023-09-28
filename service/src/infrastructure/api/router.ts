import express, { Request, Response, Router, NextFunction } from "express";
import { ProductService } from "../../services";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

const getProducts = async (request: Request, response: Response) => {
  const products = await ProductService.all();

  response.send({
    products: products,
  });
};

router.get("/products", getProducts);

export default router;
