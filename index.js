const express = require("express");
// const connectToDatabase = require("./");
const routes = require("./routes/Emproute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const cors = require("cors");

// Middleware
app.use(cors());
dotenv.config();
app.use(express.json());

// Connect to the MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
connectToDatabase();

// API routes
app.use("/api/employees", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
