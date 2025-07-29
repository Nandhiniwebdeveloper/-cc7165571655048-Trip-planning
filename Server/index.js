require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Trip = require("./Models/Trip"); // Updated path/model

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

// GET all trips
app.get("/api/trips", async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

// GET one trip by ID
app.get("/api/trips/:id", async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (trip) res.json(trip);
  else res.status(404).json({ error: "Trip not found" });
});

// CREATE new trip
app.post("/api/trips", async (req, res) => {
  const newTrip = new Trip(req.body);
  await newTrip.save();
  res.status(201).json(newTrip);
});

// UPDATE a trip
app.put("/api/trips/:id", async (req, res) => {
  await Trip.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

// DELETE a trip
app.delete("/api/trips/:id", async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
