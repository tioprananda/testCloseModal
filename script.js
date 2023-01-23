// show modal login
const login = document.querySelector("#login");
// ketika tombol login diklik,
login.addEventListener(`click`, () => {
  showModal();
});

// get close
const close = document.querySelector(".close");
close.addEventListener(`click`, () => {
  closeModal();
});

// get batal
const batal = document.querySelector(".batal");
batal.addEventListener(`click`, () => {
  closeModal();
});

// get escape
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    closeModal();
  }
};

// area close
document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".modal")) {
      closeModal();
    }
  },
  false
);

// function ------------------------------------------------------------------------------------------
// function show modal
const showModal = function () {
  // get elemen modal
  const modal = document.querySelector(".modal");
  // add class show-modal
  modal.classList.add("show-modal");
};

// function close modal
const closeModal = function () {
  // get elemen modal
  const modal = document.querySelector(".modal");
  // add class show-modal
  modal.classList.remove("show-modal");
  // reset form
  document.getElementById("myForm").reset();
};
