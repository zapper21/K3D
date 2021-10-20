const env = {
  database: process.env.database,
  username: process.env.username,
  password: process.env.password,
  host: process.env.host,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
