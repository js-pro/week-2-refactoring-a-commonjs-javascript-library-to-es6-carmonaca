

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var completeAlphabet = alphabet.concat(numbers);


var randomLetters = function(chars,length=0){
	 var result = '';
	 if(typeof length === 'number'){
  	  for (let i = length; i > 0; --i){
  		    	result += chars[Math.round(Math.random() * (chars.length - 1))];	
  		 } 
     }
     return result;
};

module.exports = {
   randomString: function(length=0){ 
   	var result  = '';
          result = randomLetters(alphabet,length);
	    return result;
   }, 

    randomStringWithNumbers: function(length, withNumbers=true){
    	 var result = '';
        if (withNumbers === true){
        	result = randomLetters(completeAlphabet,length);
        }else{
        	result = randomLetters(alphabet,length);
        }
      
	    return result;
   } 

};