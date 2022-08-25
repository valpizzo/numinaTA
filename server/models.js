const axios = require('axios');
const fs = require('fs');
const path = require ('path');

// MODELS extract desired data from the json file as is
module.exports = {
  getCumulativeSum: async (classType) => {
    //GET all data from the device
    let records = await fs.promises.readFile(path.join(__dirname, '/data/data.json'));
    //Only pull out records that are from the indicated class
    records = JSON.parse(records);
    const classTracks = [];
    for (let i = 0; i < records.length; i++) {
      if (classType === records[i]['class']) {
        classTracks.push(records[i]);
      }
    }
    return classTracks;
  },
  getTrackPoints: async (trackid) => {
    //GET all data from the device
    let records = await fs.promises.readFile(path.join(__dirname, '/data/data.json'));
    //Only pull out records that with the indicated trackid
    records = JSON.parse(records);
    const trackPoints = [];
    for (let i = 0; i < records.length; i++) {
      if (records[i]['trackid'] === trackid) {
        trackPoints.push(records[i]);
        trackFound = true;
      }
    }

    return trackPoints;
  },
};
