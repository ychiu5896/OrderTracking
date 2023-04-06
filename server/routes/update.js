const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');




router.get('/:id', updateController.getOrders, (req,res) => {
  console.log(res.locals.orderlist);
  return res.status(200).json(res.locals.orderlist);
} );


router.put('/:id', updateController.updateOrder, (req,res) => {
  console.log(res.locals.submitupdate);
  return res.status(200).json(res.locals.submitupdate);
});




module.exports = router;