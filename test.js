const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app! <a href="https://smartcss.esdrasde2.repl.com">esdrasde2 css smart.css</a>')
});

app.listen(3000, () => {
  console.log('server started');
});
