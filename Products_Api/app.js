// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
//var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';


//var mongoDB = process.env.MONGODB_URI || dev_db_uri ;


mongoose.connect('mongodb://localhost:27017/products' , {useNewUrlParser : true , useUnifiedTopology: true} )
.then( () => console.log("Succesful Connected To Database") )
.catch ( (err) => console.error("Do not connect TO Datebase" , err) );

mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
