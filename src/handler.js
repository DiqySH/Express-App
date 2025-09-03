import { books } from "./data.js";

const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

const addBookHandler = (req, res) => {
  const { name, author } = req.body;

  const id = Date.now();

  const newbook = {
    id,
    name,
    author,
  };

  books.push(newbook);

  res.status(201).json({
    status: "success",
    message: "Data berhasil ditambahkan",
    data: {
      bookId: id,
    },
  });
};

export { getAllBooksHandler, addBookHandler };
