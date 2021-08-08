const Joi = require('joi');

const contact = {
  body: Joi.object().keys({
    from: Joi.string().required().max(64),
    email: Joi.string().required().email(),
    time: Joi.string().required().valid('7 Days', '1 Month', '3 Months', '6 Months', '1 Year', 'More than 1 Year'),
    text: Joi.string().required().max(500),
  }),
};

module.exports = { contact };
