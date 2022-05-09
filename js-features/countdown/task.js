const timerSecElem = document.getElementById('timer-sec');
const timerMinuteElem = document.getElementById('timer-minute');
const timerHourElem = document.getElementById('timer-hour');

let timerSec = timerSecElem.textContent;
let timerMinute = timerMinuteElem.textContent;
let timerHour = timerHourElem.textContent;

const reverseTimer = setInterval(() => {
  if (timerSec > 0) {
    timerSec--;
    timerSec < 10 ? timerSecElem.textContent = '0' + timerSec.toString() : timerSecElem.textContent = timerSec;
  }
  else {
    if (timerMinute > 0) {
      timerMinute--;
      timerMinute < 10 ? timerMinuteElem.textContent = '0' + timerMinute.toString() : timerMinuteElem.textContent = timerMinute;
      timerSec = 59;
    }
    else {
      if (timerHour > 0) {
        timerHour--;
        timerHour < 10 ? timerHourElem.textContent = '0' + timerHour.toString() : timerHourElem.textContent = timerHour;
        timerMinute = 60;
      }
      else {
        alert("Вы победили в конкурсе!");
        clearInterval(reverseTimer);
        location.assign("https://cdn.culture.ru/files/208468e9-a0d3-5e01-8191-fbf9a1cff57a/voina-i-mir");
      } 
    }
  }
}, 1000)