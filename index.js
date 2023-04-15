const express = require('express');
const app = express();
const https = require('https');

app.get('/', (req, res) => {
  let url = req.query.url;
  console.log(url);
  //res.send(`<h1>${req.params.id}</h1>`);
  res.end();
  
  https.get(url, (response) => {
    //const { statusCode } = response;
    console.log(response.headers["location"]);
  
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
  
  
});

app.listen(3001, () => console.log(('listening :)')))
