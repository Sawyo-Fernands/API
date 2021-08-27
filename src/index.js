const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

var cors = require('cors');
app.use(cors());

require('./controllers/authController')(app); 
require('./controllers/deviceController')(app); 
require('./controllers/authorizationController')(app); 

app.listen(3002);
