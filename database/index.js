const mongoose = require('mongoose');

mongoose.set('debug', process.env.MONGO_DEBUG);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

module.exports = {
  Url: require('./models/Url'),
  PortfolioItems: require('./models/PortfolioItems'),
  Admin: require('./models/Admin'),
};
