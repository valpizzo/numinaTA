const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

// Port to listen on
app.set('port', 3001);
// Middleware
app.use(cors());
app.use(express.json());

app.use('', router);

app.listen(app.get('port'), () => {
  console.log('Listening on port,', app.get('port'));
});
