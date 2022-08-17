const axios = require('axios');
const fs = require('fs');
const csv = require('csv-parser');
const path = require ('path');

const s3Url = 'https://numina-take-home-interview.s3.us-east-2.amazonaws.com/data.csv';
const results = [];

//One time use file, run 'node server/data/data_extract.js' in command like to populate
// Parse data.csv and write it to a json file in a readable format
fs.createReadStream('/Users/valpizzo/Desktop/Learning/numinaTA/server/data/data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFile(path.join(__dirname, '/data.json'), JSON.stringify(results, null, '\t'), err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });

  });

