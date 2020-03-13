function RemoveAccents(elementID) {
  str = document.getElementById(elementID).value;
  var accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
  var accentsOut = "AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg";
  str = str.split('');
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  document.getElementById(elementID).value = str.join('');
}
function CopyToClipboard(elementID) {
  var copyText = document.getElementById(elementID);
  copyText.select();
  document.execCommand("copy");
}
function CleanText(elementID){
  document.getElementById(elementID).value = "";
}
function TextUpper(elementID){
  str = document.getElementById(elementID).value;
  str = str.toUpperCase();
  document.getElementById(elementID).value = str;
}
function TextLower(elementID){
  str = document.getElementById(elementID).value;
  str = str.toLowerCase();
  document.getElementById(elementID).value = str;
}
function TextFirstUp(elementID){
  str = document.getElementById(elementID).value;
  str = str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  document.getElementById(elementID).value = str;
}
