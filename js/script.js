 
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var flag = false;
 
 
 
// hide/display START/STOP buttons
function displayStopButton() {
  start.style.display = 'none';
  stop.style.display = 'inline-block';
}
 
function displayStartButton() {
  start.style.display = 'inline-block';
  stop.style.display = 'none';
}
 
 
// Get Date start point
function startStopwatch() {
 if(!flag) initialDate = new Date;
}
 
 
// calculate timer
function getTime() {
 
  var currentDate = new Date;
  timer = new Date (currentDate - initialDate);
 
  milliseconds = timer.getMilliseconds();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getUTCHours();
 
  if(milliseconds < 100){
    milliseconds = '0' + milliseconds;
  }
  if(milliseconds < 10){
    milliseconds = '0' + milliseconds;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  if (minutes < 10){
    minutes = '0' + minutes;
  }
  if (hours < 10){
    hours = '0' + hours;
  }
}
 
// display timer in document
function counter() {
  getTime();
  document.getElementById('show-time').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds  ;
};
 
// interval for display
function displayTimer() {
  timerId = setInterval(counter, 10);
}
 
 
function stopTimer() {
  clearInterval(timerId);
  getTime();
  flag = true;
}
 

function resetTimer() {
  flag = false;
  clearInterval(timerId);
  start.style.display = 'inline-block';
  stop.style.display = 'none';

  document.getElementById('show-time').innerHTML = '00:00:00:000';
}
 
start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayStopButton);
start.addEventListener('click', displayTimer);
stop.addEventListener('click', stopTimer)
stop.addEventListener('click', displayStartButton);
reset.addEventListener('click', resetTimer);