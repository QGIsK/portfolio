const express = require('express');
const helmet = require('helmet');
const path = require('path');
const xss = require('xss-clean');
const robots = require('express-robots-txt');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const csp = require('./config/csp');
const { jwtStrategy } = require('./config/passport');
const { authLimiter, contactLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/api');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);

// app.use((req, res, next) => {
//   res.setHeader('Content-Security-Policy', csp);
//   next();
// });

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// use robots file
app.use(robots('./robots.txt'));

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/api/auth', authLimiter);
  app.use('/api/contact', contactLimiter);
}

// v1 api routes
app.use('/api/', routes);

// send back a 404 error for any unknown api request
app.use('/api', (req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use('/static', express.static(path.join(__dirname, '../_static/')));
app.use('/css', express.static(path.join(__dirname, '../_dist/css')));
app.use('/js', express.static(path.join(__dirname, '../_dist/js')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../_dist/index.html`));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
