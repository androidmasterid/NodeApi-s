/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const studentRoutes = require('./api/routes/student') 


app.use('/student' , studentRoutes)
app.use((req, res, next) => {
  res.status(200).json({
    message: 'My app is running again  ',
  });
});

module.exports = app;
