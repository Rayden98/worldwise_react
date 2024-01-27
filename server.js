// server.js
import express from "express";
import fs from "fs";
import cors from "cors"; // Import the cors module

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/cities", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./data/cities.json", "utf8");

    // Simulate a delay of 500 milliseconds
    setTimeout(() => {
      res.json(JSON.parse(data));
    }, 500);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
