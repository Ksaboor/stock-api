const DAILY_ADJUSTED = "TIME_SERIES_DAILY_ADJUSTED";
const MONTHLY_ADJUSTED = "TIME_SERIES_DAILY_ADJUSTED";

const timeperiod = (type) => {
  switch (type) {
    case "daily":
      return DAILY_ADJUSTED;
    case "monthly":
      return MONTHLY_ADJUSTED;
    default:
      break;
  }
};

module.exports = timeperiod;
