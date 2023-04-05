const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(path.resolve(__dirname,'../src'))));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`);
})

module.exports = app;