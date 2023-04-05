const db = require('../models/orderModel');

const orderControllers= {};

orderControllers.getOrders = (req,res,next) => {
  const queryStr = 'SELECT * FROM orderlist';

  db.query(queryStr)
    .then((data) => {
      res.locals.orderlist = data.rows;
      next();
    })
    .catch((err) => {
      next({
        log: `orderControllers.getOrders : ERROR ${err}`,
        message: {err: 'Error ocurred in orderControllers.getOrder'}
      });
    });

};

orderControllers.createOrders = (req,res,next) => {
  const {date,order_id,location,price,details} = req.body;
  const insertData = [date,order_id,location, price, details];
  const queryStr = 'INSERT INTO orderlist (date,order_id,location,price,details) VALUES ($1,$2,$3,$4,$5)';
  db.query(queryStr,insertData)
    .then((data) => {
      res.locals.createdOrder = data;
      next();
    })
    .catch((err) => {
      next({
        log: `orderControllers.createOrders : ERROR ${err}`,
        message: {err: 'Error ocurred in orderControllers.createOrders'}
      });
    });

};

module.exports = orderControllers;