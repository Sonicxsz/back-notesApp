const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
  color: String,
  important: {
    type: Boolean,
    default: false,
  },
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;