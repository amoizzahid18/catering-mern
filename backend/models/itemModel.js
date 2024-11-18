const mongoose = require("mongoose");

const itemSchema = mongoose.Schema.object({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  variants: [
    {
      name: {
        type: String, // e.g., "5kg Rice Bag Channa 20 to 25 Servings"
        required: true,
      },
      servings: {
        type: String, // Optional but helpful for understanding size/weight
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  packaging: [
    {
      name: {
        type: String,
        required: true,
      },
      variants: [
        {
          servings: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
