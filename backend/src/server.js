import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import customerRouter from "./routes/customerRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cookieparser from "cookie-parser";
dotenv.config();

const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(express.json());
app.use(cookieparser());

// route handling
app.use("/api/customers", customerRouter);
app.use("/api", userRouter);

export default app;
