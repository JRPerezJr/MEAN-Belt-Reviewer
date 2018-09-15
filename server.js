const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));<--Angular will be using JSON so it can be shut down at this point.
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));




require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(8000, function() {
    console.log("Chilling like a Villain on port 8000");
});