//Please listen the following overview https://www.youtube.com/watch?v=Bj1v1Yfg5TU
//require, exports and module.exports

var fs = require('fs');

//1  include your module which is a js from the main folder
var tempConverter = require("./temperatureConverter");
console.log(tempConverter.c2f(30));
console.log(tempConverter.f2c(86));
 

//2 include your module directly from the sub folder 
var calc = require('./modules/calculator.js'); 
console.log(calc.add(1,2)); 

var sum = require ('./modules/sum.js')
console.log (sum.AddNumber(5,8));

var bookInfo = require("./modules/bookName.js"); // include specific module which is under sub folder
var book1 = new bookInfo.Book ('Js','Smith');
book1.displayBName();


 //3 working with interface
//If you have maney modules that you created, instead of requiring each module one by one, you can use interface file index.js
var mymodule = require('./modules'); //sub folder only 
console.log(mymodule.calculate.add(2,3)) //this approach req an index file
console.log(mymodule.calculate.subtract(2,3)); //this approach req an index file
console.log(mymodule.calculate.multiply(4,3));

var b1 = new mymodule.display.Book("Jony","Kony");
console.log(b1.name);
b1.BookName();
 



