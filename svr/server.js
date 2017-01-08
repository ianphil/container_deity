var express = require('express');
var bodyParser = require('body-parser');
var open = require('open');
var os = require('os');

/* eslint-disable no-console */

var app = express();
app.use(bodyParser.json());

const port = 6996;
var healthConfig = {
  svcName: 'deity',
  host: os.hostname(),
  status: 'green'
};

app.post('/api/timer', (req, res) => {
  res.send('<h1>' + req.body.data + '</h1>');
});

app.get('/health', (req, res) => {
  res.status(200).send(JSON.stringify(healthConfig));
});

app.listen(port, (err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log('Demigod running at http://localhost:' + port);
    open('http://localhost:' + port + '/health');
  }
});
