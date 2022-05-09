const hole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;

for (item of hole) {
  let holeWithId = document.getElementById(item.id);
  let holeClassName;

  holeWithId.onclick = function() {
    holeClassName = holeWithId.className;
    holeClassName === "hole hole_has-mole" ? countDead++ : countLost++;
    if (countLost > 5) {
      alert("Иди посмотри в даль и попробуй еще раз")
      countDead = 0;
      countLost = 0;
    }
    dead.textContent = countDead;
    lost.textContent = countLost;
  }
}