"use strict"
"ESLint-disable"

function pageLoad() { document.getElementById("go").onclick = goClick; }

function goClick() {
    setTimeout(countDown, 1000);
}

function alarm() {
    const bodyElement = document.getElementById("body");
    bodyElement.className = "awesome";
}

/**
 * make the textbox count down the seconds
 * get the current value and reduce it to 0
 * if value is 0 cancel the timer
 */
function countDown() {
   let secondsTextbox = document.getElementById("sec");
    const seconds = +secondsTextbox.value;
    let minuteTextbox = document.getElementById("min");
    let minutes = +minuteTextbox.value
    if(minutes > 0){
        minuteTextbox.value = 60*seconds-1
        //setTimeout(countDown,1000*60*minutes)
    }

    if (seconds > 0) {
        secondsTextbox.value = seconds - 1;
        setTimeout(countDown, 1000);
    } else {
        alarm();
    }
}

window.onload = pageLoad;