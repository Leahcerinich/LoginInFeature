const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

const USERNAME = 'Fred';
const PASSWORD = 'password';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/login', function(req, res) {
  if (req.body.username === USERNAME && req.body.password === PASSWORD) {
    return res.status(200).send('Logged in');
  } 
  res.status(401).send('unauthorised');
});

app.listen(port, () => console.log(`node server is running on ${port}`))
