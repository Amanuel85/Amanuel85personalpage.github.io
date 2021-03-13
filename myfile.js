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
    document.getElementById("btn").onclick = calcTip;
}
function calcTip() {
	//let subtotalElem = 
	//var tipElem = 
	//var totalElem = document.getElementById('total');
	let  subtotal = document.getElementById("subtotal").value
	let tip =  document.getElementById("tip").value
    let total = parseFloat(subtotal+ subtotal*tip/100)
    document.getElementById("total").value = total
	//totalElem.innerHTML = '$' + total;
}
window.onload = pageLoad