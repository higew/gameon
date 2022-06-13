function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose[0].addEventListener ("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal (){
  modalbg.style.display = "none";
}


// eventListener

firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);

// function check input

function showError(el) {
  el.setAttribute('data-error-visible', true);
}

function hideError(el) {
  el.setAttribute('data-error-visible', false)
}

function isFirstNameValid () {
  const parent = firstName.closest('div');
  showError(parent);
  // if (firstName.value.trim().length < 2 || firstName.value.trim() === "" || !/^[A-zÀ-ÿ][A-zÀ-ÿ-][A-zÀ-ÿ]+$/.test(firstName.value)) {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === "" || !/^[A-zÀ-ÿ]+(?:-?[A-zÀ-ÿ]+)+$/.test(firstName.value)) {
    return false;
  } 

  hideError(parent);
  return true;
}

function isLastNameValid () {
  const parent = lastName.closest('div');
  showError(parent);
  if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !/^[A-zÀ-ÿ]+(?:-?[A-zÀ-ÿ]+)+$/.test(lastName.value)) {
    return false;
  } 

  hideError(parent);
  return true;
}