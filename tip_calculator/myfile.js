"use strict"
/*
function pageLoad(){
    document.getElementById("ok").onclick = okClick; // null
}

function okClick()
{alert(" You clicked ok!!");
const okButton = document.getElementById("ok");
okButton.className = "fancy" ;
setTimeout(reset,3000)
} 

function reset(){
    const okButton = document.getElementById("ok")
    okButton.className = " "
}
window.onload = pageLoad
*/
function pageLoad(){
    document.getElementById("tip").onclick = calcTip;
}
function calcTip() {
	//let subtotalElem = 
	//var tipElem = 
	//var totalElem = document.getElementById('total');
	 subtotal = document.getElementById("subtotal")
    let subValue = +subtotal.value;
    
	tip =  document.getElementById("tip")
    
   let tipvalue = +tip.value
   // let total = parseFloat(subtotal+ subtotal*tip/100)
   let totalWtip = subValue + subValue*tipvalue*0.01
    document.getElementById("total").value = totalWtip
	//totalElem.innerHTML = '$' + total;
}
window.onload = pageLoad;