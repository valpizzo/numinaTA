const router = require('express').Router();
const controller = require('./controller');

// All of the routes used by the front end
router.get('/cumulativeSum/:class', controller.transformCumulativeSum);
router.get('/trackPoints/:trackid', controller.transformTrackPoints);

module.exports = router;