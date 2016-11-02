const express = require('express');
const Gpio = require('onoff').Gpio;
const relay = new Gpio(17, 'out');

relay.writeSync(1);

process.on('SIGINT', function () {
  relay.unexport();
});

const app = express();

app.use(express.static('../client/build'));

app.post('/open', function (req, res) {
  relay.writeSync(0);
  setTimeout(() => relay.writeSync(1), 1000);
  res.send('Yes sir!');
});

app.listen(process.env.NODE_PORT || 80, function () {
  console.log('Ok I\'m waiting!');
});
