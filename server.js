//Dependancies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();


//Port for Heroku
var PORT = process.env.PORT || 3000;

//Express stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Route for the homepage
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname + "./home.html"));
});


//Listening
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});

