import express from "express";
import {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
  deleteBookById,
} from "../handler/bookHandler.js";

const bookRouter = express.Router();

bookRouter.get("/books", getAllBooksHandler);
bookRouter.post("/books", addBookHandler);
bookRouter.get("/books/:bookId", getBookByIdHandler);
bookRouter.put("/books/:bookId", updateBookByIdHandler);
bookRouter.delete("/books/:bookId", deleteBookById);
bookRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default bookRouter;
