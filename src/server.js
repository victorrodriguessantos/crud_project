const { path } = require('express/lib/application');

require('dotenv').config({path:'variables.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // modulo que converte o body da requisição para outros formatos

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes); // ira fazer com que todos os endereços das rotas venha com o /api

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})