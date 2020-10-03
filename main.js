function show(ID){document.getElementById(ID).display.style=null;}
function hide(ID){document.getElementById(ID).style.display="none";}
function device(){
    var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
hide("pc")    
}
else{hide("apk")}
}