var a = 5;
var b = 6;
var c = a + b;
function addTwoNum() {
	document.getElementById('ex3_vals').innerHTML =
		' sum of ' + a + ' and ' + b + ' is';
	document.getElementById('ex3').innerHTML = c;
	document.getElementById('ex3_vals2').innerHTML =
		'a = ' +
		a +
		' and ' +
		' b = ' +
		b +
		' and ' +
		'the sum of a and b is ' +
		c;
}
function subtwoNum() {}
function total() {
	var a = 5;
	var b = 6;
	var c = a + b;
	document.getElementById('exer2').innerHTML =
		'a = ' +
		a +
		' and b = ' +
		b +
		' and the sum of ' +
		a +
		' and ' +
		b +
		' is ' +
		c;
}

function getProduct() {
	var a = 5;
	var b = 6;
	var c = a * b;
	document.getElementById('exer3').innerHTML =
		'a = ' +
		a +
		' and b = ' +
		b +
		' and the product of ' +
		a +
		' and ' +
		b +
		' is ' +
		c;
}

function Greet() {
	document.getElementById('exer4').innerHTML =
		document.getElementById('input1').value +
		', ' +
		document.getElementById('input2').value;
}
