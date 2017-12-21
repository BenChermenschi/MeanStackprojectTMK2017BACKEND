var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');

mongoose.connect('mongodb://api:meanstackapi@ds161336.mlab.com:61336/meanstackproject2017', {
    useMongoClient: true
});

var app = express();

var port = 3000;

//view engine
/*app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view engine', 'html');*/

app.use(logger('dev'));
//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json({limit: '10mb'}));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//set static folder
app.use(express.static(path.join(__dirname,'client')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
    next();
});


app.use('/', appRoutes);

// catch 404 and forward to helper handler
app.use(function (req, res, next) {
    res.status(404).json({ message: 'Not found!' });
});


app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.code == undefined ? 500 : err.code).json(err);
});





//asociate / with indexfile


app.listen(port,function(){
    console.log('meanstackprojecttmk-backend started on port ' + port);
});