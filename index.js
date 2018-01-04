const Sequelize = require('sequelize');
const finale = require('finale-rest');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Define your models
const database = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: './sport.db'
});

// Initialize server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const server = http.createServer(app);

// Initialize finale
finale.initialize({
  app: app,
  sequelize: database
});

const models = {};
fs.readdirSync(__dirname + '/models').forEach(m => {
  let name = m.slice(0, -3);
  models[name] = database.import(__dirname + `/models/${m}`);
  finale.resource({
    model: models[name],
    endpoints: [`/${name.toLowerCase()}`, `/${name.toLowerCase()}/:id`],
    pagination: false
  });
});

require('./routes')(models, app, database);

// Create database and listen
server.listen(3000, () => {
  const addr = server.address();
  console.log(`listening at ${addr.address}:${addr.port}`);
});