var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  Category = require('./api/models/categoryModel')
  bodyParser = require('body-parser'),
  cors = require('cors');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/QuizDB'); 
mongoose.connect('mongodb+srv://dkashmensky:Nap66n7j@quizappdb-tb5pi.mongodb.net/QuizDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 


var routes = require('./api/routes/quizRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Quiz RESTful API server started on: ' + port);
