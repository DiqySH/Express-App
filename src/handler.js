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

const getBookByIdHandler = (req, res) => {
  const { bookId } = req.params;
  const numericBookId = Number(bookId);

  const book = books.find((b) => b.id === numericBookId);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: { book },
  });
};

const updateBookByIdHandler = (req, res) => {
  const { bookId } = req.params;
  const { name, author } = req.body;
  const numbericBookId = Number(bookId);

  const book = books.find((b) => b.id === numbericBookId);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  book.name = name;
  book.author = author;

  res.status(200).json({
    status: "success",
    message: "Buku berhasil diupdate",
  });
};

export {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
};
