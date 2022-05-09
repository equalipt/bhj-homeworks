const revalElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function (e) {
  const vieportHeight = window.innerHeight;
  for (let elem of revalElements) {
    const { top, bottom } = elem.getBoundingClientRect();

    top < vieportHeight ? elem.classList.add("reveal_active") : (elem.className = "reveal");
    bottom < 0 ? (elem.className = "reveal") : true;
  }
});