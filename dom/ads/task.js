const rotatorElems = document.querySelectorAll(".rotator");

for (let rotatorElem of rotatorElems) {
  const rotatorCases = rotatorElem.querySelectorAll(".rotator__case");

  let rotatorCount = 0;
  let rotatorSpeed = 1000;

  function rotator() {
    for (let elem of rotatorCases) {
      clearInterval(rotatorInterval);
      if (elem.classList.contains("rotator__case_active")) {
        elem.classList.remove("rotator__case_active");
        rotatorCount = rotatorCount + 1 >= rotatorCases.length ? 0 : ++rotatorCount;

        const nextElem = rotatorCases[rotatorCount];
        nextElem.classList.add("rotator__case_active");
        nextElem.style.color = nextElem.dataset.color;
        rotatorSpeed = nextElem.getAttribute("data-speed");

        rotatorInterval = setInterval(rotator, rotatorSpeed);
        break;
      }
    }
  }

  let rotatorInterval = setInterval(rotator, rotatorSpeed);
}