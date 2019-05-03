// https://cloud.mongodb.com/v2
// https://www.udemy.com/node-with-react-fullstack-web-development/learn/lecture/13733504#content

const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

app.get('/', function (req, res) {
  res.redirect('/auth/google');
});

const PORT = 8080;
app.listen(PORT);