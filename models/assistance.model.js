const { Schema, model } = require("mongoose");

const AssistanceSchema = Schema({
  code: {
    type: String,
    required: true,
    unique: false,
  },
  description: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Number, required: true },
});

module.exports = model("Assistance", AssistanceSchema);
