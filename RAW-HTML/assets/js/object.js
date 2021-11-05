//Introduction to this keyword and JS object examples
//EX1-----------------------------------------------
var obj = {}; //object
var sale = 'yes',
	payement = 'cash';
var veg = {
	name: 'Apple',
	prop: 'fruit',
	amount: 10,
	fullInfo: function () {
		return this.name + ' is ' + this.prop + 'amount is ' + this.amount;
	},
	collection: ['fresh', 5, 6, 'old'],
	brandInfo: { brand: 'ca', type: 'org' },
	others: [sale, payement],
};
console.log(veg.fullInfo());
console.log(veg.collection[0]);
console.log(veg.brandInfo.brand);
//Ex2----------------------------------------------------------
this.name = 'Web Design'; // Attached to the window
var name = 'Web'; //Global variable
console.log(this.name);
console.log(name);
//Ex3---------------------------------------------------------------------
var obj = { name: 'Sandra' };
function teacher() {
	return this.name;
}
console.log(teacher()); //global function with undifind value
//Ex4------------------------------------------------------------------------------
let user = {
	fName: 'John',
	sayHi() {
		console.log('Hello ' + this.fName + this); //this = user object
	},
};
user.sayHi(); // Hello, John
//EX4-A-------------------------------------------------
function sayHey(user) {
	console.log('Hello ' + user.fName + ' ' + this); //this = window obj
}
sayHey(user); // Hello, John
//Ex5------------------------------------------------------------------------------
var webCourse = {
	code: 'DESN3203',
	name: 'Web Design and Development',
	getFullName: function () {
		console.log(this.code + ' - ' + this.name + ' printed from ' + this); //this refers to object object
	},
};
function printCourse(arg) {
	console.log(arg.code + ' - ' + arg.name + ' printed from ' + this); //this refers to object global
}
webCourse.getFullName();
printCourse(webCourse);
//EX6----------------------------------------------------------------
function Book(bname, bauthor) {
	this.name = bname;
	this.author = bauthor;
	this.displayBName = function () {
		console.log('Book Name: ' + this.name + ' by ' + this.author);
	};
}
var book1 = new Book('Js', 'Smith'); //obj inst
book1.displayBName();
book1.name;
