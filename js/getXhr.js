var getXhr;
console.log("inside getXhr");
getXhr = function(){
	var xhr;
	console.log("inside getXhr function");
	try{
    	xhr = new ActiveXObject("Msxml2.XMLHTTP"); // if newer Internet Explorer's
	}catch(E){
    	try{
          xhr = new ActiveXObject("Microsoft.XMLHTTP"); // if older Internet Explorers
    	}catch(e){
          xhr = false; // user is not using Internet Explorer
    	}
	}
	if(!xhr && typeof XMLHttpRequest != 'undefined'){
    	xhr = new XMLHttpRequest();  // create a Javascript instance of XMLHttpRequest
	}
	return xhr;
}

