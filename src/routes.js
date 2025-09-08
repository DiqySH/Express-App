import expres from "express";
import {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
} from "./handler.js";

const router = expres.Router();

router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);
router.get("/books/:bookId", getBookByIdHandler);
router.put("/books/:bookId", updateBookByIdHandler);
router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
