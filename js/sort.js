var numnames=0;
var names = new Array();
function myFun() {
    thename=document.theform.newname.value;
    names[numnames]=thename;
    numnames++;
    names.sort();
    document.theform.sorted.value=names.join("\n");
}