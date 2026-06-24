const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    plan: {
      type: String,
      default: "Standard",
    },

    joinDate: {
      type: Date,
      default: Date.now,
    },

    expiryDate: {
      type: Date,
    },

    status: {
      type: String,
      default: "Active",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", memberSchema);