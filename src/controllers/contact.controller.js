const httpStatus = require('http-status');
const catchAsync = require('@utils/catchAsync');
const { emailService } = require('@services');

const sendContactRequest = catchAsync(async (req, res) => {
  await emailService.sendContactEmail(req.body);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = { sendContactRequest };
