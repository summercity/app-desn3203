var express = require('express');
var app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

var port = 9000;

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
	console.log(t1 + '-' + t2);
	res.send(t1 + '-' + t2);
});

app.listen(port, clb);
