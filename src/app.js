var express = require('express');
var {json} = require('express')
var morgan = require('morgan')

//Importamos las rutas
var userRouter = require('./Router/user');
var eventRouter = require('./Router/evento');


var app = express();

//middleware

app.use(morgan('dev'));// para ver las peticiones que llegan al servidor
app.use(json());// para procesar los datos en formato JSON

app.use("/api/user",userRouter);
app.use("/api/evento",eventRouter);

module.exports =app //exportamos la varibale app