const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderControllers');

router.get('/', orderControllers.getOrders, (req,res) => {
  console.log(res.locals.orderlist);
  return res.status(200).json(res.locals.orderlist);
} );

router.post('/', orderControllers.createOrders, (req,res) => {
  return res.status(200).json(res.locals.createdOrder);
});

router.delete('/', orderControllers.deleteOrder,(req,res) => {
  return res.status(200).json(res.locals.deleteOrder);
});

module.exports = router;