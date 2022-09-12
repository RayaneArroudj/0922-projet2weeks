const express = require('express');
const typeorm = require('typeorm');
const Wilder = require('./models/Wilder');

const app = express();

const dataSource = new typeorm.DataSource({
  type: 'sqlite',
  database: './wildersdb.sqlite',
  synchronize: true,
  entities: [Wilder],
});

app.get('/', function (req, res) {
  res.send('Hello World from express');
});

const PORT = 4000;

async function start() {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({ name: 'Jean Wilder' });
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

start();
