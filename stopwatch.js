let sec = 0;
let min = 0;
let hr = 0;
let interval = null;

var stopwatch = function timer() {
    let time = document.getElementById("timer");

    if (min > 59) {
        min = 0;
        hr++;
    }
    if (sec > 59) {
        sec = 0;
        min++;
    }
    time.innerHTML = `${hr}h : ${min}m : ${sec}s`;
    sec++;
}
let start = document.getElementById("start");
start.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!interval) {
        interval = setInterval(stopwatch, 1000);
    }
    start.disabled = "true";


});
let stop = document.getElementById("stop");
stop.addEventListener('click', (event) => {
    event.stopPropagation();
    clearInterval(interval);
    interval = null;
    start.disabled = false;
});

let reset = document.getElementById("reset");
reset.addEventListener('click', (event) => {
    event.stopPropagation();
    clearInterval(interval);
    interval = null;
    //setTimeout(stopwatch);
    sec = 0;
    hr = 0;
    min = 0;
    const time= document.getElementById("timer");
    time.innerHTML = `${hr}h : ${min}m : ${sec}s`;
    start.disabled = false;
    
});
