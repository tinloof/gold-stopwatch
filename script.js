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
  return n < 10 ? (n = "0" + n) : n;
}

// Declare variables to use in our functions below

let timerInterval;
let elapsedTime = 0;
let startTime;

// Create "start", "pause" and "reset" functions

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToTimerString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
}

// Create variables for the buttons we will click on and create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}

playButton.addEventListener("click", start);

pauseButton.addEventListener("click", pause);

document.getElementById("resetButton").addEventListener("click", (e) => {
  reset();
  playButton.style.display = "block";
  pauseButton.style.display = "none";
});
