const { Schema, model } = require("mongoose");

const ClauseSchema = Schema({
  code: { type: String, required: true, unique: false },
  description: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Number, required: true },
});

module.exports = model("Clause", ClauseSchema);
