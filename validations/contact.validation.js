const Joi = require("joi");

const contact = {
  body: Joi.object().keys({
    from: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    time: Joi.string().required(),
    body: Joi.string().required(),
  }),
};

module.exports = { contact };
