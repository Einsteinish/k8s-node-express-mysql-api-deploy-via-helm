async function main() {
  const express  = require('express');
  const app      = express();
  const port     = 3000;
  app.get('/', (req, res) => res.json({hello: 'world'}));
  await app.listen(port);
  console.log(`Listening on port ${port}.`);
}
main();
