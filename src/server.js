import express from "express";
import router from "./routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3333;

app.use(router);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
