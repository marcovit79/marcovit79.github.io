function replaceText(el, text) {
  if (el != null) {
    clearText(el);
    var newNode = document.createTextNode(text);
    el.appendChild(newNode);
  }
}

function clearText(el) {
  if (el != null && el.childNodes.length != 0) {
    if (el.childNodes) {
	  while ( el.childNodes.length) {
	  	var childNode = el.childNodes[0];
       	el.removeChild(childNode);
      }
    }
  }
}

function getText(el) {
  var text = "";
  if (el != null) {
    if (el.childNodes) {
      for (var i = 0; i < el.childNodes.length; i++) {
        var childNode = el.childNodes[i];
        if (childNode.nodeValue != null) {
          text = text + childNode.nodeValue;
        }
      }
    }
  }
  return text;
}

var Utf8 = {

    // public method for url encoding
    encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // public method for url decoding
    decode : function (utftext) {
		var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}

function getType(x) {
    // If x is null, return "null"
    if (x == null) return "null";

    // Next try the typeof operator
    var t = typeof x;
	// If the result is not vague, return it
    if (t != "object")  return t;

    // Otherwise, x is an object. Use the default toString( ) method to
    // get the class value of the object.
    var c = Object.prototype.toString.apply(x);  // Returns "[object class]"
    c = c.substring(8, c.length-1);              // Strip off "[object" and "]"

    // If the class is not a vague one, return it.
    if (c != "Object") return c;

    // If we get here, c is "Object".  Check to see if
    // the value x is really just a generic object.
	if (x.constructor == Object) { return c;}  // Okay the type really is "Object"
    // For user-defined classes, look for a string-valued property named
    // classname, that is inherited from the object's prototype
    if ("classname" in x.constructor.prototype &&  // inherits classname
        typeof x.constructor.prototype.classname == "string") // its a string
        return x.constructor.prototype.classname;

    // If we really can't figure it out, say so.
    return "<unknown type>";
}