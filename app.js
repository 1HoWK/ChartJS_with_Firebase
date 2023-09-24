const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/Test.html'));
  // res.send('Hello World!');
})

