const { validationResult } = require('express-validator');
const axios = require('axios');
var logCount = 1

exports.expressError = (req, res) => {
  return new Promise((resolve, reject) => {
    const result = validationResult(req).formatWith(({ location, msg, param, value, nestedErrors }) => (msg));
    if (!result.isEmpty()) {
      let errArr = result.array()
      reject({ error: true, msg: (errArr.length == 1) ? errArr[0] : errArr, status: 400 })
    }
    resolve(true)
  })
}

exports.errorHandler = (err, req, res, next) => {
  // To log errors
  console.log(`=== Error Log.No.${logCount++}::${new Date()} ===`)
  console.log(err)
  err = err ? err : {}
  let { msg, status } = err;
  res.status(status || 500).json({
    error: true,
    msg: msg || "Internal server error",
  });
};

exports.weatherApiCall = async (objParam, isForecast = false) => {
  return new Promise((resolve, reject) => {
    let param = objParam ? "&" + new URLSearchParams(objParam).toString() : null;
    axios.get(`${isForecast ? process.env.FORECAST_WEATHER_API_URL : process.env.CURRENT_WEATHER_API_URL}?key=${process.env.API_KEY}&aqi=no${param ? param : ""}`)
      .then((res) => {resolve(res.data)})
      .catch((error) => {
        if (error && error.response && error.response.data && error.response.data.error && error.response.data.error.message && error.response.status) {
          reject({ error: true, msg: error.response.data.error.message, status: error.response.status })
        }
        else
          reject()
      });
  })
}

exports.spliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  if (arr.length <= chunkSize) {
    return arr
  } else {
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
  }
  return res;
}