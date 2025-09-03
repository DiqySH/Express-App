import express from "express";
import router from "./routes.js";

const app = express();

app.use(express.json());

const port = 3333;

app.use(router);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
