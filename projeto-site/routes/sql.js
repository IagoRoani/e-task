const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config  =  require('../config/config_database');


sql.connect(config)
    .then(conn => global.conn = conn)
    .catch(err => console.log("Erro ao conectar no banco"));

console.log("Banco Conectado");
module.exports = router;