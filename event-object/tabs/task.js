const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
let activeIndex;

tabs.forEach((tab, index) => {
  if (tab.className === "tab tab_active") {
    activeIndex = index;
  }
  tab.addEventListener("click", () => {
    if (activeIndex !== index) {
      tabs[activeIndex].className = "tab";
      tab.classList.add("tab_active");
      tabContent[activeIndex].className = "tab__content";
      tabContent[index].classList.add("tab__content_active");
      activeIndex = index;
    }
  });
});