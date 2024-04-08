const mongoose = require("mongoose");

// creating schema for todo
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updatedAt: {
      type: Date,
      default: Date.now(),
      required: true,
  }
});

module.exports = mongoose.model("Todo", TodoSchema); // cn be used elsewhere as Todo
