const pino = require('pino');


const transporter = pino.transport({
  target: 'pino-pretty',
  options:{ 
    colorize : true,
    timestampKey : 'time',
    translateTime : true
  }
});

const log = pino({
  base : {pid : false},
}, transporter);


module.exports = log;
