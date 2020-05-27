// Convert time to a format of hours, minutes, and seconds

function timeToTimerString(time) {
    let diffHours = time / (1000 * 60 * 60);
    let diffMinutes = (diffHours - Math.floor(diffHours)) * 60;
    let diffSeconds = (diffMinutes - Math.floor(diffMinutes)) * 60;
    let diffMilliseconds = (diffSeconds - Math.floor(diffSeconds)) * 100;

    let hours = formatTwoDigits(Math.floor(diffHours));
    let minutes = formatTwoDigits(Math.floor(diffMinutes));
    let seconds = formatTwoDigits(Math.floor(diffSeconds));
    let milliseconds = formatTwoDigits(Math.floor(diffMilliseconds));

    return `${minutes}:${seconds}:${milliseconds}`;
}

// Format time so it is double-digit

function formatTwoDigits(n) {
    if (n < 10) {
        return n = "0" + n;
    } else {
        return n;
    }
}

// Declare variables to use in our functions below

let timerInterval;
let elapsedTime = 0;
let startTime;

// Create "start", "pause" and "reset" functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToTimerString(elapsedTime);
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
}

// Create variables for the buttons we will click on and create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", function (e) {
    if (playButton.style.display = "block") {
        start();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    }

});

pauseButton.addEventListener("click", function (e) {
    if (pauseButton.style.display = "block") {
        pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
});
document.getElementById("resetButton").addEventListener("click", function (e) {
    reset();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});
