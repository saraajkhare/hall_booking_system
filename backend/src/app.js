const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const Booking = require("./models/Booking");

const app = express();

/* ✅ MUST be before routes */
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

/* Routes */
app.get("/api/bookings", async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

app.post("/api/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Booking failed" });
  }
});

/* Start server AFTER DB sync */
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(5001, () =>
    console.log("Server running on port 5001")
  );
});
