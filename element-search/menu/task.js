const menuLinks = document.querySelectorAll(".menu__link");
let lastOpenSubMenu;

for (let menuLink of menuLinks) {
  menuLink.onclick = function () {
    const subMenu = menuLink.closest(".menu__item").querySelector(".menu .menu_sub");

    if (subMenu) {
      if (lastOpenSubMenu !== undefined && lastOpenSubMenu !== subMenu) {
        lastOpenSubMenu.className = "menu menu_sub";
      }

      if (subMenu.className === "menu menu_sub menu_active") {
        subMenu.className = "menu menu_sub";
      } else {
        subMenu.className += " menu_active";
        lastOpenSubMenu = subMenu;
      }

      return false;
    }
  };
}