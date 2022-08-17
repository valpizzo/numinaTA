const models = require('./models');

// CONTROLLERS transform data into the right shape to give back to the view
module.exports = {
  transformCumulativeSum: async (req, res) => {
    let dataRes = await models.getCumulativeSum(req.params.class);
    const tracksEachHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < dataRes.length; i++) {
      let hour = parseInt(dataRes[i]['time'].slice(0, 3));
      tracksEachHour[hour]++;
    }
    res.status(200).send(tracksEachHour);
  },
  transformTrackPoints: async (req, res) => {
    const dataRes = await models.getTrackPoints(req.params.trackid);
    res.status(200).send(dataRes);
  },
};
