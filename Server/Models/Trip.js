const mongoose = require("mongoose");

const tripPlannerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g., "Goa Trip"
    destination: { type: String, required: true }, // e.g., "Goa"
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    participants: [
      {
        name: String,
        email: String,
      },
    ],
    budget: Number,
    notes: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming there's a User model
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripPlannerSchema);
