

var registerForm =document.querySelector(".registerForm");
var translates=[];
registerForm.onsubmit=function(e){
e.preventDefault();

var element=e.target.elements;

var translate={
    amount: element[0].value,
    exshang: element[1].value,
    finalval: element[2].value,
}
translates.push(translate)

if(element[1].value=="dollar")
document.querySelector(".result").textContent=element[0].value*0.71;
else if(element[1].value=="dinar")
document.querySelector(".result").textContent=element[0].value*1.41;
else if(element[1].value=="nis")
document.querySelector(".result").textContent=element[0].value*0.19;

}