const mongoose = require("mongoose");

const businessSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Business", businessSchema);
