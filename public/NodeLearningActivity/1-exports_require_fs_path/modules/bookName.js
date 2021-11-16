//usually var x is exports
var x=module.exports={};

x.Book = function(bname, bauthor) {
	this.name = bname;
	this.author = bauthor;
	this.displayBName = function() {
		console.log('Book Name: ' + this.name + ' by ' + this.author);
	}
}
