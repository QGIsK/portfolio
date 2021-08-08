const express = require('express');

const config = require('@config/config');

// const authRoute = require('./auth.route');
// const userRoute = require('./user.route');
const contactRoute = require('./contact.route');
const settingsRoute = require('./settings.route');

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: '/auth',
  //   route: authRoute,
  // },
  // {
  //   path: '/users',
  //   route: userRoute,
  // },
  {
    path: '/contact',
    route: contactRoute,
  },
  { path: 'settings', route: settingsRoute },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
