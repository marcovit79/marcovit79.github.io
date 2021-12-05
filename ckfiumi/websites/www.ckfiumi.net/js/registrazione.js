var xmlHttp;
function loadXMLDoc(url) {
   	xmlHttp = false;
   	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = processReqChange;
	xmlHttp.open("GET", url, 1);
	xmlHttp.send(null);
	//alert(Sarissa.serialize(xmlHttp.responseXML));
	function processReqChange() {
   			// only if xmlHttp shows "complete"
 		if (xmlHttp.readyState == 4) {
    			// only if "OK"
   			 if (xmlHttp.status == 200) {
       			// ...processing statements go here...
   				response  = xmlHttp.responseXML.documentElement;
      			method    = response.getElementsByTagName('method')[0].firstChild.data;
	    		result    = response.getElementsByTagName('result')[0].firstChild.data;
 	 			eval(method + '(\'\', result)');
			} else {
       			alert("There was a problem retrieving the XML data:\n" + xmlHttp.statusText);
  			}
		}
	}
}	
	
function checkName(input, response) {
 		if (response != ''){ 
   		//alert("ma vieni")
		// Response mode
   		message   = document.getElementById('nameCheckFailed');
   		if (response == "1"){
   			message.className = 'errore';
   		}else{
     		message.className = 'hidden';
   		} 
 		}else{
   		// Input mode
   		url  = 'http://'+ location.hostname +'/xml/get_alias.php?q=' + input;
   		loadXMLDoc(url);
 		}
}
function checkEmail(input, response) {
 		if (response != ''){ 
   		//alert("ma vieni")
		// Response mode
   		message   = document.getElementById('emailCheckFailed');
   		if (response == "1"){
   			message.className = 'errore';
   		}else{
     		message.className = 'hidden';
   		} 
 		}else{
   		// Input mode
 		url  = 'http://'+ location.hostname +'/xml/get_email.php?q=' + input;
   		loadXMLDoc(url);
 		}
}
