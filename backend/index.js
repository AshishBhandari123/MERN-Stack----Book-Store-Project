import express from "express";
import { MONGO_URI, PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/Book.model.js";
import BookRoutes from "./routes/BookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Book routes
app.use("/books", BookRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
