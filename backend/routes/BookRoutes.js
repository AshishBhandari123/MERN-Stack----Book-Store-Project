import express from "express";
import { Book } from "../models/Book.model.js";

const router = express.Router();

// Route for creating book

router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title && !author && !publishYear) {
      return res.status(404).json({
        message: "All fields are required",
      });
    }
    const newBook = {
      title,
      author,
      publishYear,
    };
    const book = await Book.create(newBook);
    if (book) return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
});

// Route for getting all books

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(201).send({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

// Route for getting one book by id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(201).send(book);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Route for updating book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    // Check if at least one field is present for updating
    if (!title && !author && !publishYear)
      return res.status(400).send("Updating at least one field is required");

    // Find and update the book based on the provided id
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear }, //we can use alternative i.e, req.body
      { new: true } // This option returns the modified document rather than the original
    );

    // Check if the book was found and updated
    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route for deleting book

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) res.status(404).send("id is invalid");
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) res.status(404).send("book not found");
    res.status(201).send("book deleted successfully");
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;
