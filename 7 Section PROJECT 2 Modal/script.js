"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");

const btnOpenModel = document.querySelectorAll(".show-modal");
// console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");//classlist returns the CSS classnames of an element.
    overlay.classList.remove("hidden");
  });

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
