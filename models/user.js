const mongoose = require("mongoose");

const Address = require("./address").schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
});

module.exports = mongoose.model("User", userSchema);
