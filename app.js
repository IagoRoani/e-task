process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors =  require("cors");

const indexRouter = require('./routes/index');
const sqlRouter = require('./routes/sql');
const networkRouter = require('./routes/network');
const usuariosRouter = require('./routes/usuarios');
const leiturasRouter = require('./routes/leituras');
const maquinasRouter = require('./routes/maquinas');
const dashboardRouter = require('./routes/dashboard');
const chartlineRouter = require('./routes/chartline');
const clienteRouter = require('./routes/cliente');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sql', sqlRouter);
app.use('/network', networkRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/maquinas', maquinasRouter);
app.use('/dashboard', dashboardRouter);
app.use('/chartline', chartlineRouter);
app.use('/cliente', clienteRouter);

module.exports = app;
