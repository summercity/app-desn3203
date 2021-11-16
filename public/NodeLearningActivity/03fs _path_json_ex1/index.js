const { Console } = require('console');
var fs = require('fs');//require fs module
var path = require("path");
//sample js object
// var StudentJS = { students:
//     [ { name: 'John', age: '30', profession: 'IT', city: 'ca' },
//       { name: 'Rani', age: '38', profession: 'Programmer', city: 'ca' },
//       { name: 'Sami', age: '32', profession: 'IT', Researcher: 'ca' },
//       { name: 'Tanya', age: '38', profession: 'IT', Student: 'ca' } ],
//    Teachers: [ {}, {}, {} ] }
   var data = {  
      friends: [ 
         {"key":"a","fname":"Hana", "lname":"Tom", "city":"calgary"},
         {"key":"b","fname":"Mery", "lname":"Dan", "city":"Toronto"},
         {"key":"c","fname":"Rita", "lname":"Bom", "city":"Banff"},
         {"key":"d","fname":"Solomie", "lname":"Daniel", "city":"Calgary"}
      ]}
//1 convert the data object to JSON data format
var jsonData = JSON.stringify(data);
console.log(jsonData);

//2 access paricular object values
console.log("Access particular object values");
console.log(data.friends[2].fname);  
console.log (data.friends[1]);  
console.log(data.friends[3].fname + " " + data.friends[3].city)


//4 Create JSON file using file system write method
//fs.writeFileSync   and fs.writeFile  (file, data, optional parameter)
fs.writeFileSync("mydata.json", JSON.stringify(data));
console.log("\n mydata.json file created \n");


//5 Read the file we created back using read method
var data1 = fs.readFileSync('mydata.json','utf-8');
console.log("JSON data reading from file");
console.log("===========================")
console.log(data1);//JSON format

//6 Convert JSON format to JS object
var datafile = JSON.parse(data1);
console.log("JSON data converted back to JS object");
console.log("============");
console.log(datafile);

//7 Check file path
console.log(__dirname);
console.log(__filename);
var filepath = path.join(__dirname, "mydata.json");
console.log(fs.existsSync(filepath));


 

 

//  //Excercies
//  //Make your own JSON data or JS data and work on it using fs and path module 
//  //Read fs and path module documenation when time allows

