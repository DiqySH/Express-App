import express from "express";

const app = express();

const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const books = [
  { id: 1, name: "Tuntunan Sholat", author: "Abdullah Afif" },
  { id: 2, name: "Belajar Node.js", author: "Kartono" },
  { id: 3, name: "Pemrograman Dasar", author: "Ustadz B" },
];

const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

app.get("/books", getAllBooksHandler);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
