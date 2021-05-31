const mongoose = require("mongoose");

const PortfolioItemsSchema = new mongoose.Schema({
  shown: {
    default: false,
    type: Boolean,
    required: true,
  },
  size: {
    mdUp: {
      default: 10,
      type: Number,
      required: true,
    },
    mdDown: {
      default: 5,
      type: Number,
      required: true,
    },
  },
  image: {
    default: "https://api.demiann.dev/static/images/Placeholder.WebP",
    type: String,
    required: true,
  },
  url: {
    default: "#",
    type: String,
    required: true,
  },
  order: {
    default: null,
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("PortfolioItems", PortfolioItemsSchema);
