const mongoose = require('mongoose');

const PortfolioItemsSchema = new mongoose.Schema({
  shown: {
    default: false,
    type: Boolean,
    required: true,
  },
  size: {
    mdUp: {
      default: 8,
      type: Number,
      required: true,
    },
    mdDown: {
      default: 10,
      type: Number,
      required: true,
    },
  },
  name: {
    type: String,
    default: '',
    required: true,
  },
  about: {
    type: String,
    default: 'Made with NodeJS And VueJS',
    required: true,
  },
  image: {
    type: String,
    default: '/static/images/Placeholder.WebP',
    required: true,
  },
  url: {
    type: String,
    default: '#',
    required: true,
  },
  order: {
    type: Number,
    default: null,
    required: true,
  },
});

module.exports = mongoose.model('PortfolioItems', PortfolioItemsSchema);
