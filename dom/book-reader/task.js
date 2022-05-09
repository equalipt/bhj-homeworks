const book = document.getElementById("book");

for (let elem of document.querySelectorAll(".book__control > a")) {
  elem.addEventListener(
    "click",
    function (e) {
      e.preventDefault();

      if (elem.closest(".book__control").classList.contains("book__control_font-size")) {
        fontSizeToggle(elem);
      } else if (elem.closest(".book__control").classList.contains("book__control_color")) {
        colorToggle(elem);
      } else if (elem.closest(".book__control").classList.contains("book__control_background")) {
        backgroundToggle(elem);
      }
    },
    false
  );
}

function fontSizeToggle(elem) {
  document.querySelector(".font-size_active").classList.remove("font-size_active");

  if (elem.dataset.size === "small") {
    activeFontSizeToggle(elem);
    bookClassAdd("book_fs-small");
    book.classList.remove("book_fs-big");
  } else if (elem.dataset.size === "big") {
    activeFontSizeToggle(elem);
    bookClassAdd("book_fs-big");
    book.classList.remove("book_fs-small");
  } else {
    activeFontSizeToggle(elem);
    book.classList.remove("book_fs-big", "book_fs-small");
  }
}

function colorToggle(elem) {
  document.querySelector(".book__control_color > .color_active").classList.remove("color_active");
  book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");

  if (elem.dataset.textColor === "black") {
    activeColorToggle(elem);
    bookClassAdd("book_color-black");
  } else if (elem.dataset.textColor === "gray") {
    activeColorToggle(elem);
    bookClassAdd("book_color-gray");
  } else if (elem.dataset.textColor === "whitesmoke") {
    activeColorToggle(elem);
    bookClassAdd("book_color-whitesmoke");
  }
}

function backgroundToggle(elem) {
  document.querySelector(".book__control_background > .color_active").classList.remove("color_active");
  book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");

  if (elem.dataset.bgColor === "black") {
    activeColorToggle(elem);
    bookClassAdd("book_bg-black");
  } else if (elem.dataset.bgColor === "gray") {
    activeColorToggle(elem);
    bookClassAdd("book_bg-gray");
  } else if (elem.dataset.bgColor === "white") {
    activeColorToggle(elem);
    bookClassAdd("book_bg-white");
  }
}

function activeFontSizeToggle(elem) {
  elem.classList.toggle("font-size_active");
}

function activeColorToggle(elem) {
  elem.classList.toggle("color_active");
}

function bookClassAdd(elemClassName) {
  book.classList.add(elemClassName);
}