// var obj = { name: 'Amit', 
//             marks: 97, 
//             distinction: true
//           }

// var JSONObj=  {
//                 "id": "SODV3201",
//                 "language": "Web Foundation",
//                 "price": 500,
//             }

// var JSObj =  {
//                  id : "SODV3201",
//                  language : "Web Foundation",
//                  price : 500,
//              }
// var jsonText= JSON.stringify(JSObj);

// console.log(JSObj);
// console.log(jsonText);

// //EX3 ---------------------------------------------------
var students = '{ "hani": { "name": "hani", "age": "29", "gender": "male" } }';
// var students = {
//                 "hani" : {
//                     "name" : "hani",
//                     "age" :  "29",
//                     "gender" : "male" 
//                 },
              
//               "Mira" : {
//                     "name" : "Mira",
//                     "age" : "32",
//                     "gender" : "female"
//                 },
              
//               "Ali" : {
//                     "name" : "Ali",
//                     "age" : "27",
//                     "gender" : "male"
//                 }
//               }
 //console.log(students.Mira.name + ' is ' + students.Mira.age + ' years old');
 console.log(JSON.parse(students));


// var students2 = [{
//                 "name" : "Steve",
//                 "age" :  "29",
//                 "gender" : "male"

//                 },
//                 {
//                 "name" : "Peter",
//                 "age" : "32",
//                 "gender" : "male"

//                 },
//                 {
//                 "name" : "Sophie",
//                 "age" : "27",
//                 "gender" : "female"
//                 }]';

// console.log(JSON.parse(students2));


//Example 3
var StudentJSON = {"students":[
                            {"name":"John", "age":"30", "profession":"IT", "city":"ca"},
                            {"name":"Rani", "age":"38",  "profession":"Programmer", "city":"ca"},
                            {"name":"Sami", "age":"32",  "profession":"IT","Researcher":"ca"},
                            {"name":"Chaitanya", "age":"38",  "profession":"IT", "Student":"ca"}
                        ],
                        "Teachers":[
                            {},
                            {},
                            {}
                        ]
                    };
//  console.log(StudentJSON.students[3].name);
 
// console.log (StudentJSON.students[1]);

//  //----------------------------use json.stringfy and json.parse to use json data----------------------------------------------

 var fs = require('fs');

 var jsObj = {name:"Ali", lastName:"Mostefa", professional:"IT", work:"Tech"}

 fs.writeFileSync("mydata.json", JSON.stringify(jsObj));

 //console.log("file created");

var data = fs.readFileSync('mydata.json','utf-8');
//console.log(data);

var word = JSON.parse(data);
console.log(word);

fs.writeFileSync("sample.json", JSON.stringify(jsObj));

 // create a new json file and create a js object to copy based on the example above