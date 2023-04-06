const db = require('../models/orderModel');

const updateControllers = {};

updateControllers.getOrders = (req,res,next) => {
  const {id} = req.params;
  console.log(id);

  const queryStr = 'SELECT * FROM orderlist WHERE order_id = $1';
  
  db.query(queryStr,[id])
    .then((data) => {
      res.locals.orderlist = data.rows;
      next();
    })
    .catch((err) => {
      next({
        log: `updateControllers.getOrders : ERROR ${err}`,
        message: {err: 'Error ocurred in updateControllers.getOrder'}
      });
    });
  
};

updateControllers.updateOrder = (req,res,next) => {
  const {id} = req.params;
  const {date,order_id,location,price,details} = req.body[0];
  const insertData = [date,order_id,location, price, details,id];
  console.log('UPDATEORDER' , req.body);
  console.log(insertData);
  const queryStr = 'UPDATE orderlist set date = $1 , order_id = $2, location = $3, price = $4 ,details = $5 WHERE order_id = $6 RETURNING *';
  db.query(queryStr,insertData)
    .then((data) => {
      res.locals.submitupdate = data.rows[0];
      console.log('Update',res.locals.submitupdate);
      next();
    })
    .catch((err) => {
      next({
        log: `updateController.updateOrder : ERROR ${err}`,
        message: {err: 'Error ocurred in orderControllers.updateOrder'}
      });
    });
    
};





module.exports = updateControllers;