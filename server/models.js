const axios = require('axios');
const fs = require('fs');
const path = require ('path');
const s3Url = 'https://numina-take-home-interview.s3.us-east-2.amazonaws.com/data.csv';

// MODELS extract desired data from the json file as is
module.exports = {
  getCumulativeSum: async (classType) => {
    //GET all data from the device
    let records = await fs.promises.readFile(path.join(__dirname, '/data/data.json'), (readErr, data) => {
      console.log(JSON.parse(data));
    });
    //Only pull out records that are from the indicated class with a unique trackid
    records = JSON.parse(records);
    let curTrackId = '';
    const uniqueTracks = [];
    for (let i = 0; i < records.length; i++) {
      if (curTrackId !== records[i]['trackid'] && classType === records[i]['class']) {
        uniqueTracks.push(records[i]);
        curTrackId = records[i]['trackid'];
      }
    }
    return uniqueTracks;
  },
  getTrackPoints: async (trackid) => {
    //GET all data from the device
    let records = await fs.promises.readFile(path.join(__dirname, '/data/data.json'), (readErr, data) => {
      console.log(JSON.parse(data));
    });
    //Only pull out records that with the indicated trackid
    records = JSON.parse(records);
    let trackFound = false;
    const trackPoints = [];
    for (let i = 0; i < records.length; i++) {
      if (records[i]['trackid'] === trackid) {
        trackPoints.push(records[i]);
        trackFound = true;
      } else {
        //Break out of the loop if we have found the end of the track
        if (trackFound) {
          break;
        }
      }
    }

    return trackPoints;
  },
};
