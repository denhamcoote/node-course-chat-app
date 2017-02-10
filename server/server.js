const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

// Access to static files in /public
app.use(express.static(publicPath))

app.get('/', (req,res) => {});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
