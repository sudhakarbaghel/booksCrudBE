const express = require("express");
const routes = require("./routes/BookRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
connectToDatabase();

app.use("/api/books", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
