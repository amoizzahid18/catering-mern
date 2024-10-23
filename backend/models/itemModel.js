const mongoose = require("mongoose");

const itemSchema = mongoose.Schema.object({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  variants: [
    {
      description: {
        type: String,
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
          number: {
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
