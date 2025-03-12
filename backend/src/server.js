import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 4700;

app.use(express.json());
app.use(cors());

app.listen(port, () =>
  console.log(`server listening for request via port ${port}`)
);
