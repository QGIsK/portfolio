const mongoose = require('mongoose');
const logger = require('@helpers/logger');

mongoose.set('debug', process.env.MONGO_DEBUG);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => logger.info('MongoDB connected'))
  .catch((err) => {
    logger.warn(err);
    process.exit(1);
  });

module.exports = {
  Url: require('./models/Url'),
  PortfolioItems: require('./models/PortfolioItems'),
  Admin: require('./models/Admin'),
};
