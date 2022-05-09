const cookie = document.getElementById("cookie")
const clickerCounter = document.getElementById("clicker__counter")
const clickerSpeedMidCounter = document.getElementById("clicker__speed-mid")
const clickerSpeedLastCounter = document.getElementById("clicker__speed-last")
let count = 0;
let timeClick = Date.now();
let clickSpeedSum = 0;

cookie.onclick = function() {
  count = clickerCounter.textContent ++
  clickerCounter.textContent % 2 == 0 ? cookie.width = 200 : cookie.width = 400

  const timeClickNow = Date.now() - timeClick
  timeClick = Date.now()

  const clickSpeed = 1 / (timeClickNow / 1000)
  clickerSpeedLastCounter.textContent = clickSpeed.toFixed(2)
  clickSpeedSum += clickSpeed

  let clickSpeedMid = clickSpeedSum / count
  clickSpeedMid != 'Infinity' ? clickerSpeedMidCounter.textContent = clickSpeedMid.toFixed(2) : clickSpeedMid = 0

  if (count >= 150 && clickSpeedMid > 5) {
    alert("Дай пальцу отдохнуть, друг!")
    location.reload(true);
  }
}