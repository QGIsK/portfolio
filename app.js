require('dotenv').config();
require('module-alias/register');

const expressSanitizer = require('express-sanitizer');
const robots = require('express-robots-txt');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const subdomain = require('express-subdomain');

const app = express();

require('@database/');

app.use(robots('./robots.txt'));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(expressSanitizer());
app.use(express.json());

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  next();
});

if (process.env.NODE_ENV === 'development') {
  app.use('/api', require('@routes/api'));
  app.use('/go', require('@routes/redirector'));
} else {
  app.use(subdomain('api', require('@routes/api')));
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
