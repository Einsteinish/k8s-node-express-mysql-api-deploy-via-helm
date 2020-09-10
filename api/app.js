async function main() {
  const mysql    = require('mysql2/promise');
  const express  = require('express');
  const app      = express();
  const port     = 3000;
  const connOpts = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  };
  const conn = await mysql.createConnection(connOpts);

  // Close the connection on ctrl+c.
  process.on('SIGINT', close);

  // Hello, world route.
  app.get('/', (req, res) => res.json({hello: 'world'}));

  // Get all users route.
  app.get('/users', getAllUsers);

  app.listen(port);
  console.log(`Listening on port ${port}.`);
  
  async function close() {
    await conn.end();
    process.exit(0);
  }

  async function getAllUsers(req, res) {
    const [users] = await conn.query(`
      SELECT  u.userID, u.firstName, u.lastName
      FROM    users u`);
    res.json(users);
  }
}

main();
