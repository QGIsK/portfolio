const catchAsync = require('@utils/catchAsync');
const { settingsService } = require('@services');

const getGeneralSettings = catchAsync(async (req, res) => {
  const settings = await settingsService.getGeneralSettings();
  res.send(settings);
});

module.exports = { getGeneralSettings };
