var exp=module.exports={};//define the module

// exp.Book = function(bname, bauthor) { //create a constructor function which is exportable
// 	this.name = bname;
// 	this.author = bauthor;
// 	this.displayBName = function() {
// 		console.log('Book Name: ' + this.name + ' by ' + this.author);
// 	}
// }

//You can write it as follow using module.exports too and use inteface file index.js
module.exports = {
	Book : function(bname, bauthor) { //create a constructor function which is exportable
		this.name = bname;
		this.author = bauthor;
		this.BookName = function() {
			console.log('Book Name: ' + this.name + ' by ' + this.author);
		}
	}
}
