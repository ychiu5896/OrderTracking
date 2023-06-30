
const log = require('../logger/index.js');

const loginController = {};


loginController.getAccessToken = (req,res,next) => {
  log.info(req.body);


};

module.exports = loginController;