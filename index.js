
// Declared polybiusDatasetStr by choosing a keyord which is 64 char long
var polybiusDatasetStr = ['zebracdf','ghiklmno','pqstuvwx','yjZEBRAC','DFGHIKLM','NOPQSTUV','WXYJ[\]^', '_`@{|}~z'];

function hybridCypher(msg, key, mode) {

    // If type of action is Encryption
    if(mode == 1){
      var encrptData = vigenereEncrypt(key, msg);
      return encrptData;
    }
    // If type of action is Decryption
    else if(mode == 0){
      // Called vigenereDecrypt function for Decryption
      var decrptData = vigenereDecrypt(key,msg);
      return decrptData;
    }
  }
function vigenereEncrypt(key, str) {

  // ********* Start of Vigenere Encrypt Model *************

  // Array declared with the size of string
  var output = [str.length];
  var result = 0;
  var output_str;

  for (var i = 0; i < str.length; i++) {
      // Bound the result within 128 ASCII value 
      // charCodeAt help me to get the ASCII value of the desired char
      result = ((str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
      // Bound the result within 64 ASCII value
      if(result<65) result+=64;
      // fromCharCode help me to get the desired char from ASCII value
      output[i] = String.fromCharCode(result%128);
  }
  output_str = output.join('');

  // ********* End of Vigenere Encrypt Model *************

  // ********* Calling of Polybius Encrypt Model *************
  return polybiusEncrypt(output_str);
}

function vigenereDecrypt(key, msg) {
 
 // ********* Calling Polybius Decrypt Model *************
  var str = polybiusDecrypt(msg);

   // ********* Start of Vigenere Decrypt Model *************
  var output = [str.length];
  var result = 0;
  var output_str;

  for (var i = 0; i < str.length; i++) {

      if (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128;
      } else {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
      }
      if(result<65) result+=64;
      
      output[i] = String.fromCharCode(result%128);
    }

  output_str = output.join('');

  // ********* End of Vigenere Decrypt Model *************
  return output_str;
}

function polybiusEncrypt(key){
  // ********* Start of Polybius Encrypt Model *************
  var encrpKey="";
  for (var i = 0; i < key.length; i++){
    for(let j=0; j<8; j++){
      if(polybiusDatasetStr[j].indexOf(key[i])!= -1){
        encrpKey += (j+1);
        encrpKey += polybiusDatasetStr[j].indexOf(key[i])+1
        break;
      }
    }
  }
//   console.log("********* Start Hybrid Encryption **********")
//   console.log(encrpKey);
//   console.log("********* End Hybrid Encryption **********")
  // ********* End of Polybius Encrypt Model *************

  return encrpKey;
}
function polybiusDecrypt(key){
  var decrpKey="";
  for (var i = 0; i < key.length; i+=2){
    decrpKey+=polybiusDatasetStr[key[i]-1][key[i+1]-1];
  }
//   console.log("********* Strat Hybrid Decryption **********")
//   console.log(decrpKey);
//   console.log("********* End Hybrid Decryption **********")
  return decrpKey;
}

module.exports = {hybridCypher}