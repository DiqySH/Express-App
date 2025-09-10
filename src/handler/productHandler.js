import { products } from "../data/products.js";

const getAllProductsHandler = (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
};

const addProductHandler = (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Nama product tidak boleh kosong",
    });
  }

  if (!description || !description.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Description product tidak boleh kosong",
    });
  }

  if (!price || typeof price !== "number") {
    return res.status(400).json({
      status: "fail",
      message: "Tipe harga tidak valid",
    });
  }

  const id = Date.now();

  const newProduct = {
    id,
    name,
    description,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    status: "success",
    message: "product berhasil ditambahkan",
    data: {
      productId: id,
    },
  });
};

const getProductByIdHandler = (req, res) => {
  const { productId } = req.params;
  const numericProductId = Number(productId);

  const product = products.find((p) => p.id === numericProductId);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: { product },
  });
};

const updateProductByIdHandler = (req, res) => {
  const { productId } = req.params;
  const { name, description, price } = req.body;
  const numericProductId = Number(productId);

  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Nama product tidak boleh kosong",
    });
  }

  if (!description || !description.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Description product tidak boleh kosong",
    });
  }

  if (!price || typeof price !== "number") {
    return res.status(400).json({
      status: "fail",
      message: "Tipe harga tidak valid",
    });
  }

  const product = products.find((p) => p.id === numericProductId);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product tidak ditemukan",
    });
  }

  product.name = name;
  product.description = description;
  product.price = price;

  res.status(200).json({
    status: "success",
    message: "Product berhasil diupdate",
  });
};

const deleteProductById = (req, res) => {
  const { productId } = req.params;
  const numericProductId = Number(productId);

  const product = products.find((p) => p.id === numericProductId);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product tidak ditemukan",
    });
  }

  const index = products.indexOf(product);
  products.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: "Product berhasil dihapus",
  });
};

export {
  getAllProductsHandler,
  addProductHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
  deleteProductById,
};
