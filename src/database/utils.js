const typeorm = require('typeorm');
const Wilder = require('../models/Wilder');

const dataSource = new typeorm.DataSource({
  type: 'sqlite',
  database: './wildersdb.sqlite',
  synchronize: true,
  entities: [Wilder],
  logging: ['query', 'error'], // PERMET DE VOIR LES REQUETE SQL DANS LA CONSOLE / A UTILISER POUR DEV MAIS PAS EN PROD //
});

let initialized = false;
async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize();
    initialized = true;
    console.log('successfully conected to database.');
  }
  return dataSource;
}

async function getWilderRepository() {
  return (await getDatabase()).getRepository(Wilder);
}

module.exports = {
  getDatabase,
  getWilderRepository,
};
