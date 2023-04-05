const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderControllers');

router.get('/', orderControllers, (req,res) => {
  return res.sendStatus(200);
} );


module.exports = router;