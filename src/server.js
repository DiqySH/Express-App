import express from "express";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";
import productRouter from "./routes/productRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3333;

app.use(bookRouter, productRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
