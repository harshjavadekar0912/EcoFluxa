const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/addReading", (req, res) => {
  const { date, water, electricity } = req.body;
  db.query(
    "INSERT INTO readings (reading_date, water_usage, electricity_usage) VALUES (?, ?, ?)",
    [date, water, electricity],
    () => res.json({ message: "Reading Added Successfully" })
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
