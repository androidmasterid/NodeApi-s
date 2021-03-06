/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const studentRoutes = require('./api/routes/student') 
const facultyRoutes = require('./api/routes/faculty') 


app.use('/student' , studentRoutes)
app.use('/faculty' , facultyRoutes)
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'My app is running again  ',
//   });
// });

app.use((req , res , next)=>(
  res.status(404).json({
    error: 'Bad Request'
  })
))

module.exports = app;
