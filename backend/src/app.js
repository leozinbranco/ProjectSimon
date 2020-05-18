const express = require('express');
const routes = require('./routes');  // './' serve para mostrar que é um arquivo, e não um pacote, que nem o express. 
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3000

app.listen(port, () => {
    console.log("Api runing on port %s", port);
  });
  