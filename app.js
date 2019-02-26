function Convert() {
    var convertType = document.querySelector('input[name="convertType"]:checked').value;
    if (convertType == "Encode") {
        document.getElementById('txtOutput').value = SPEncode(document.getElementById('txtInput').value);
    }
    else if (convertType == "Decode") {
        document.getElementById('txtOutput').value = SPDecode(document.getElementById('txtInput').value);
    }
}

function CopyOutput() {
    document.getElementById("txtOutput").select();
    document.execCommand("copy");
}

function ClearForm(){
    document.getElementById("convert").reset();
}

// Encode
function SPEncode(toEncode) {
    var charToEncode = toEncode.split('');
    var encodedString = "";

    for (i = 0; i < charToEncode.length; i++) {
        //encodedChar = escape(charToEncode[i]).toLowerCase();
        encodedChar = escape(charToEncode[i]);

        if (encodedChar.length == 3) {
            encodedString += encodedChar.replace("%", "_x00") + "_";
        }
        else if (encodedChar.length == 5) {
            encodedString += encodedChar.replace("%u", "_x") + "_";
        }
        else if (encodedChar == "-") {
            encodedString += encodedChar.replace("-", "_x002d") + "_";
        }
        else {
            encodedString += encodedChar;
        }        
    }
    return encodedString;
}

// Decode
function SPDecode(toDecode) {
    var decodedString = toDecode.replace("_x", "%u").replace("_","");
    return unescape(decodedString);
}