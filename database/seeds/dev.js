require("dotenv").config();
require("module-alias/register");

const DB = require("@database");

const items = [
  { shown: true, order: 1, image: "https://api.demiann.dev/static/images/BassenMetLasse.WebP" },
  { shown: true, order: 2, image: "https://api.demiann.dev/static/images/ReviewsByMe.WebP" },
  { shown: true, order: 3, image: "https://api.demiann.dev/static/images/TemplateOne.WebP" },
];

const seed = async () => {
  const dbItems = await DB.PortfolioItems.count({});
  if (dbItems > 0) process.exit(1);

  DB.PortfolioItems.insertMany(items)
    .then(() => process.exit(0))
    .catch(err => process.exit(1));
};

seed();
