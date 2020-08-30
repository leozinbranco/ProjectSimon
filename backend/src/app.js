const express = require('express');
const routes = require('./routes');  // './' serve para mostrar que é um arquivo, e não um pacote, que nem o express. 
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);


  //Configura a porta disponível ou a porta 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
//Configura o host disponível ou "0.0.0.0"
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function () {
    console.log("Aplicação online.");
});