const { json } = require('express');
var express = require('express');
var fs = require('fs');
var app = express();
var port = 5000;
var clb = function () {
	console.log('Listining to port 5000');
};
app.listen(port, clb);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//http:localhost:5000
app.get('/', function (req, res) {
	res.send('Hello welcome to this page');
});
app.get('/home', function (req, res) {
	res.send('Hello this is get request');
});
app.get('/signup', function (req, res) {
	res.send(
		'<p>enter your name<input type ="text" /></p> <p>enter your password <input type="password" /></p>'
	);
});
app.get('/signin', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
});
//http://localhost:5000/signin
app.post('/signin', function (req, res) {
	console.log(
		req.body.fname +
			' ' +
			req.body.pw +
			' This is the data recived from the client'
	);
	rs = {
		status: 'sucess',
		msg: 'thankyou',
		name: req.body.fname,
	};
	res.send(JSON.stringify(rs)); //send the data as response, store it in json file
});
//http://localhost:5000/signin
app.get('/signhere', function (req, res) {
	console.log(
		req.query.fname +
			' ' +
			req.query.pw +
			' This is the data recived from the client'
	);
	rs = {
		status: 'sucess',
		msg: 'thankyou',
		name: req.query.fname,
	};
	res.send(JSON.stringify(rs)); //send the data as response, store it in json file
});
//create a function to save user input form to a json file. or JS object
var user = { name: 'Selam', Lname: 'Faria' };
app.get('/users/:name', function (req, res) {
	var comingName = req.params.name;
	if (comingName == user.name) {
		res.send(user);
	} else {
		res.send('Sorry no user found');
	}
});
//Store user data inside object and create a new file to store the dataset from the object
var dataexist = fs.existsSync('user.txt');
if (dataexist) {
	var userData = fs.readFileSync('user.txt', 'utf8');
	obj = JSON.parse(userData);
} else {
	var obj = { user: [] };
}
app.post('/signing', function (req, res) {
	console.log(
		req.body.fname +
			' ' +
			req.body.pw +
			' This is the data recived from the client'
	);
	if (!req.body.fname) {
		rs = {
			msg: 'please enter the name before you submit',
		};
		res.send(rs);
	} else {
		obj.user.push({
			name: req.body.fname,
			password: req.body.pw,
		});
		let data = JSON.stringify(obj, null, 2);
		//import fs module in this file
		fs.writeFile('user.txt', data, done);
		function done(e) {
			rs = {
				status: 'sucess',
				msg: 'thankyou',
				name: req.body.fname,
			};
			res.send(JSON.stringify(rs)); //send the data as response, store it in json file
			console.log(rs);
		}
	}
});
app.use(function (req, res) {
	res.status(404).send("Sorry, that page doesn't exist.  :)");
});
//Learning Activity
//Install POSTMAN and test your api
//Today class work
//Test the API's with postman,
//store the data in file, data should not be replaced by new data,
//read data fro
