const express = require("express");
const router = express.Router();
const Book = require("../model/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send("No book found for given id");
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    if (!title.trim() || !author.trim() || !summary.trim()) {
      return res.status(400).json({ msg: "Please add all fields!" });
    }
    const newBook = {
      title: title.trim(),
      author: author.trim(),
      summary: summary.trim(),
    };
    const book = await Book.create(newBook);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a book" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    if (!title.trim() || !author.trim() || !summary.trim()) {
      return res.status(400).json({ msg: "Please add all fields!" });
    }
    const newBook = {
      title: title.trim(),
      author: author.trim(),
      summary: summary.trim(),
    };
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { ...newBook },
      {
        new: true,
      }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the book" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(204).json({msg:'succesfully deleted'});
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the book" });
  }
});

module.exports = router;
