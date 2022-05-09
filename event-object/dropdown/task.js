const dropdownValues = document.querySelectorAll(".dropdown__value");
const dropdownLinks = document.querySelectorAll(".dropdown__link");

for (let dropdownValue of dropdownValues) {
  dropdownValue.addEventListener("click", function () {
    dropdownValue.nextElementSibling.className =
      dropdownValue.nextElementSibling.className === "dropdown__list"
        ? "dropdown__list dropdown__list_active"
        : "dropdown__list";
  });
}

for (let dropdownLink of dropdownLinks) {
  dropdownLink.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownLink.closest(".dropdown__list").previousElementSibling.textContent = dropdownLink.textContent;
      dropdownLink.closest(".dropdown__list").className = "dropdown__list";
    },
    false
  );
}