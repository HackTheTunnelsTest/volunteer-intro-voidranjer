import express, { Request, Response } from "express";
import { ProductService } from "../../../services";
import { success, error } from "../utils";

const router = express.Router();

const getProducts = async (_: Request, response: Response) => {
  const products = await ProductService.all();

  return success(response, {
    data: {
      products: products,
    },
    statusCode: 200,
  });
};

const getProduct = async (request: Request, response: Response) => {
  const id = request.params.id;
  const product = await ProductService.find(id);

  if (product === null) {
    return error(response, {
      error: "Product not found.",
      statusCode: 404,
    });
  }

  return success(response, {
    data: {
      product: product,
    },
    statusCode: 200,
  });
};

const createProduct = async (request: Request, response: Response) => {
  const product = await ProductService.create(
    request.body.title,
    request.body.description,
  );

  return success(response, {
    data: {
      product: product,
    },
    statusCode: 201,
  });
};

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

export default router;
