// <!-- бегущая строка -->
var chr = -1;
var txt = "If you would like to write to me, please click the button below";
var l = txt.length;
var p = "_";
function printtext() {
  chr++;
  t = document.all["text"].innerHTML;
  tt = t.substring(0, t.length - p.length);
  if (txt.charAt(chr) != "<") {
    document.all["text"].innerHTML = tt + txt.charAt(chr) + p;
  } else {
    document.all["text"].innerHTML = tt + txt.substring(chr, chr + 4) + p;
    chr = chr + 3;
  }
  setTimeout("printtext()", 60);
}
function str(num) {
  var s = "";
  for (i = 0; i < num; i++) {
    s = s + " ";
  }
  return s;
}
