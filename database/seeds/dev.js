require('dotenv').config();
require('module-alias/register');

const DB = require('@database');

const items = [
  {
    shown: true,
    name: 'Bassen Met Lasse',
    about: 'Website for Bassen Met Lasse, Made with VueJS and NodeJS',
    order: 1,
    image: '/static/images/BassenMetLasse.WebP',
    size: { mdUp: 8, mdDown: 10 },
  },
  {
    shown: true,
    name: 'Reviews by Me',
    about: 'Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB',
    order: 2,
    image: '/static/images/ReviewsByMe.WebP',
    size: { mdUp: 7, mdDown: 10 },
  },
  {
    shown: true,
    name: 'Shadow bot',
    about: 'Website for the Shadow Discord bot <br />Made with Vue and NodeJS',
    order: 3,
    image: '/static/images/ShadowBot.WebP',
    size: { mdUp: 4, mdDown: 10 },
  },
  {
    shown: true,
    name: 'Template One',
    about: 'Is Made with Vue, Express, NodeJS and MongoDB',
    order: 4,
    image: '/static/images/TemplateOne.WebP',
    size: { mdUp: 8, mdDown: 10 },
  },
];

const seed = async () => {
  const dbItems = await DB.PortfolioItems.count({});
  if (dbItems > 0) process.exit(1);

  DB.PortfolioItems.insertMany(items)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
};

seed();
