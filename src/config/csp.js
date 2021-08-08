const scriptSrcUrls = ['https://analytics.demiann.dev/js/plausible.js'];
const styleSrcUrls = [
  'https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css',
  'https://fonts.googleapis.com/css?family=Comfortaa',
];

const contentSecurityPolicy = [
  `script-src 'unsafe-eval'  'self' ${scriptSrcUrls.join(' ')}`,
  `style-src 'unsafe-inline' 'self' ${styleSrcUrls.join(' ')}`,
  `object-src 'none'`,
].join(';');

module.exports = contentSecurityPolicy;
