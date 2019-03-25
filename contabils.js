/**
contabils v0.0.1
(c) by WellingtonSalgado
*/

(function(){
	var contabs = function(args){
		if (!(this instanceof contabs)) {
			var elements = document.querySelectorAll(args);	
			return new contabs(elements);
		}
		this.myArg = args;
	}

	contabs.fn = contabs.prototype = {
		print: function(){
			return console.log(this.myArg);
			
		}
		
	}

	window.contabs = contabs , window.R$ = contabs;
	


})();


