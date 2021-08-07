require('dotenv').config();
require('module-alias/register');

const robots = require('express-robots-txt');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const xss = require('xss-clean');
const morgan = require('@helpers/morgan');
const mongoSanitize = require('express-mongo-sanitize');
const subdomain = require('express-subdomain');

const app = express();

require('@database/');

// set security HTTP headers
app.use(helmet());

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

app.use(robots('./robots.txt'));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use((req, res, next) => {
  next();
});

app.use('/api', require('@routes/api'));

if (process.env.NODE_ENV === 'development') {
  app.use('/go', require('@routes/redirector'));
} else {
  app.use(subdomain('go', require('@routes/redirector')));
}

app.use('/static', express.static('resources/'));
app.use('/css', express.static('_static/css'));
app.use('/js', express.static('_static/js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/_static/index.html`));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
