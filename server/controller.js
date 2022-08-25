const models = require('./models');

// CONTROLLERS transform data into the right shape to give back to the view
module.exports = {
  transformCumulativeSum: async (req, res) => {
    let dataRes = await models.getCumulativeSum(req.params.class);
    const tracksEachHour = Array(24);

    for (let i = 0; i < dataRes.length; i++) {
      let hour = parseInt(dataRes[i]['time'].slice(0, 3));
      //For a given hour, a Set will hold only unique trackids
      if (!tracksEachHour[hour]) {
        tracksEachHour[hour] = new Set();
      }
      tracksEachHour[hour].add(dataRes[i].trackid);
    }
    //For each hour, if no trackids have been added, it will be set to 0, otherwise, that index will hold
    //the number of class objects that passed by the sensor
    for (let i = 0; i < tracksEachHour.length; i++) {
      if (tracksEachHour[i] === undefined) {
        tracksEachHour[i] = 0;
      } else {
        tracksEachHour[i] = tracksEachHour[i].size;
      }
    }
    res.status(200).send(tracksEachHour);
  },
  transformTrackPoints: async (req, res) => {
    const dataRes = await models.getTrackPoints(req.params.trackid);
    res.status(200).send(dataRes);
  },
};
