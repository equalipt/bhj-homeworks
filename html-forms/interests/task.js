const checkboxes = Array.from(document.querySelectorAll(".interest__check"));

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    if (!checkbox.hasAttribute("checked")) {
      toCheck(checkbox);
    } else {
      toUnCheck(checkbox);
    }

    toParentCheck(checkbox);
  });
});

function toCheck(checkbox) {
  checker(checkbox);

  const siblingElem = checkbox.parentElement.nextElementSibling;
  if (siblingElem !== null && siblingElem.nodeName === "UL") {
    Array.from(siblingElem.children).forEach((elem) => {
      toCheck(elem.querySelector("label").querySelector("input"));
    });
  }
}

function toUnCheck(checkbox) {
  unChecker(checkbox);

  const siblingElem = checkbox.parentElement.nextElementSibling;
  if (siblingElem !== null && siblingElem.nodeName === "UL") {
    Array.from(siblingElem.children).forEach((elem) => {
      toUnCheck(elem.querySelector("label").querySelector("input"));
    });
  }
}

function toParentCheck(checkbox) {
  const parentUl = checkbox.closest("ul");

  if (parentUl.closest("li")) {
    const siblingLi = Array.from(parentUl.children);
    const parentCheckbox = parentUl.closest("li").querySelector("label").querySelector("input");
    let count = 0;

    Array.from(parentUl.children).forEach((elem) => {
      const checkedCheckbox = elem.querySelector("label").querySelector("input");
      if (checkedCheckbox.hasAttribute("checked")) {
        count++;
      }
    });

    if (count === siblingLi.length) {
      checker(parentCheckbox);
    } else if (count === 0) {
      parentCheckbox.indeterminate = false;
    } else {
      unChecker(parentCheckbox);
      parentCheckbox.indeterminate = true;
    }
    toParentCheck(parentCheckbox);
  }
}

function checker(checkbox) {
  checkbox.setAttribute("checked", "");
  checkbox.checked = true;
  checkbox.indeterminate = false;
}

function unChecker(checkbox) {
  checkbox.removeAttribute("checked", "");
  checkbox.checked = false;
  checkbox.indeterminate = false;
}