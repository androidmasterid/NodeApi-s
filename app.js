/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: 'My app is running',
  });
});

module.exports = app;
