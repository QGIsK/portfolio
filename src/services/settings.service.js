const { PortfolioItems } = require('@models');

/**
 * Returns general settings for portfolio
 * @returns {Promise<Portfolio>}
 */
const getGeneralSettings = async () => {
  const items = await PortfolioItems.find({ shown: true }).sort({ order: 1 });
  return { items };
};

module.exports = {
  getGeneralSettings,
};
