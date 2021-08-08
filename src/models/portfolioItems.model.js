const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const portfolioItemsSchema = mongoose.Schema(
  {
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
      trim: true,
    },
    about: {
      type: String,
      default: 'Made with NodeJS And VueJS',
      required: true,
      trim: true,
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
      trim: true,
    },
    order: {
      type: Number,
      default: null,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
portfolioItemsSchema.plugin(toJSON);
portfolioItemsSchema.plugin(paginate);

/**
 * @typedef portfolioItems
 */
const portfolioItems = mongoose.model('portfolioItems', portfolioItemsSchema);

module.exports = portfolioItems;
