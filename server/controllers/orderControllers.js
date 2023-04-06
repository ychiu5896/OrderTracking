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
  const queryStr = 'INSERT INTO orderlist (date,order_id,location,price,details) VALUES ($1,$2,$3,$4,$5) RETURNING *';
  db.query(queryStr,insertData)
    .then((data) => {
      res.locals.createdOrder = data.rows[0];
      console.log('CREATE',res.locals.createOrders);
      next();
    })
    .catch((err) => {
      next({
        log: `orderControllers.createOrders : ERROR ${err}`,
        message: {err: 'Error ocurred in orderControllers.createOrders'}
      });
    });

};


orderControllers.deleteOrder = (req,res,next) => {
  console.log(req.body);
  // const {date,order_id,location,price,details} = req.body;
  const condition = req.body.order_id;
  const queryStr= 'DELETE FROM orderlist WHERE order_id=$1';
  db.query(queryStr,[condition])
    .then((data) => {
      res.locals.deleteOrder = data;
      next();
    })
    .catch((err) => {
      next({
        log: `orderControllers.deleteOrder : ERROR ${err}`,
        message: {err: 'Error ocurred in orderControllers.deleteOrder'}
      });
    });

};


module.exports = orderControllers;