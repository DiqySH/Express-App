import expres from "express";
import { getAllBooksHandler, addBookHandler } from "./handler.js";

const router = expres.Router();

router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
