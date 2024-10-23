const mongoose = require("mongoose");

const categorySchema = mongoose.Schema.object({
  name: String,
});

module.exports = mongoose.model("Category", categorySchema);
