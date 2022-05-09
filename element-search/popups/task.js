const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseElem = document.querySelectorAll(".modal__close");
const showSuccessBtn = document.querySelector(".show-success");
modalMain.className += " modal_active";

for (item of modalCloseElem) {
  item.onclick = function () {
    console.log(modalMain);
    modalMain.className = "modal";
    modalSuccess.className = "modal";
  };
}

showSuccessBtn.onclick = function () {
  modalSuccess.className += " modal_active";
  modalMain.className = "modal";
};