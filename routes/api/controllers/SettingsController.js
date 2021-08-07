const DB = require('@database');

exports.index = async (req, res) => {
  try {
    const portfolioItems = await DB.PortfolioItems.find({ shown: true }).sort({ order: 1 });

    res.status(200).json({ portfolioItems });
  } catch (err) {
    console.log(err);
    res.status(500).json('Server error');
  }
};

exports.store = async () => {};
