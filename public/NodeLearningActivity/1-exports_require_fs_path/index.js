
//-- example 1
console.log("Example 1");

var tempConverter = require("./temperatureConverter");// include your module which is a js file
console.log(tempConverter.c2f(30));
console.log(tempConverter.f2c(86));
 

//-- example 2
console.log("Example 2");
var add = require('./modules'); // include the sub folder that contain your modules file 
console.log(add.addtion(1,2)); // this approach req an index file

//-- example 3
console.log("Example 3");
var bookInfo = require("./modules/bookName.js"); // include specific module which is under sub folder
var book1 = new bookInfo.Book ('Js','Smith');
book1.displayBName();



//-- File system and path module example 
// path and fs module are used if you are working with specific file and if you want to read or write or update on the file
//fs has different mothods with it that lets you do more opration on particular file. Please refer the online documenation

var filelocation = require('path'); 
var fs = require('fs');
//Example 4
console.log("Example 4");
var currentFile = filelocation.join(__dirname,'package.json');// current working dir path
console.log("This file is found in- : " + currentFile);

//Example 5 
console.log("Example 5");
console.log(fs.existsSync(currentFile ));