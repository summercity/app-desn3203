var express = require('express');
var app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
var fs = require('fs'); //require fs module

var port = 9000;

// const obj = [
// 	{ id: 1, firstName: 'Jan Dave', lastName: 'Arce' },
// 	{ id: 2, firstName: 'Jan Pery', lastName: 'Arce' },
// ];
const usersJson = fs.readFileSync('users.json', 'utf-8');
let obj = JSON.parse(usersJson);

var clb = () => {
	console.log('Running on port:', port);
};

app.get('/', (req, res) => {
	res.send('Root API');
});

app.get('/api/developer', (req, res) => {
	res.send({ name: 'Jan' });
});

app.get('/page/form', (req, res) => {
	res.sendFile(__dirname + '/23.html');
});

app.post('/api/form', (req, res) => {
	const t1 = req.body.t1;
	const t2 = req.body.t2;

	const obj = {
		t1,
		t2,
	};

	console.log(t1 + '-' + t2);
	const raw = fs.readFileSync('sample.json', 'utf-8');
	let mockdata = JSON.parse(raw);
	mockdata.push(obj);
	fs.writeFileSync('sample.json', JSON.stringify(mockdata));
	res.send(t1 + '-' + t2);
});

app.get('/api/users/:id', function (req, res) {
	// simplify
	// if (obj.filter((o) => (o.id = req.params.id))) {
	// 	res.send(obj.filter((o) => o.id == req.params.id));

	// } else if (req.params.id === 'all') {
	// 	res.send(obj);
	// } else {
	// 	res.send('User not found');
	// }

	//short - use es6 obj.filter((o) => (o.name = req.params.name))
	//long version
	var filtered = [];
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].name == req.params.name) {
			filtered.push(obj[i]);
		}
	}
	filtered.length > 0 ? res.send(filtered) : res.send('User not found');
});

app.post('/api/users/add', function (req, res) {
	const newUser = {
		id: obj.length + 1,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	};
	obj.push(newUser);
	fs.writeFileSync('users.json', JSON.stringify(obj));
	res.send(newUser);
});

app.listen(port, clb);
