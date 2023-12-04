// Get the name input field and card name element
let cardInput = document.getElementById("card-16-digit");
let cardNumber = document.getElementById("card-number");
let nameInput = document.getElementById("fname");
let cardName = document.getElementById("card-name");
let monthInput = document.getElementById("date-mm");
let cardMonth = document.getElementById("mm");
let yearInput = document.getElementById("date-yy");
let cardYear = document.getElementById("yy");
let cvcInput = document.getElementById("cvc-input");
let cardCvc = document.getElementById("ccv");
let numbersOnly = /^[0-9 ]+$/;
let monthOnly = /^[01-12 ]+$/;
let lettersOnly = /^[a-zA-Z]+$/;
let errorCardName = document.getElementById("cardNameError");
let errorCardNumber = document.getElementById("cardNumberError");
let errorMonth = document.getElementById("monthError");
let errorYear = document.getElementById("yearError");
let errorCvc = document.getElementById("cvcError");
let form = document.getElementById("form");
let submitButton = document.getElementById("btn-submit");
let continueButton = document.getElementById("btn-continue");
let formCompleteMessage = document.getElementById("form-complete-message");

nameInput.addEventListener("input", function () {
  if (lettersOnly.test(nameInput.value)) {
    cardName.textContent = nameInput.value;
    errorCardName.textContent = "";
  } else {
    errorCardName.textContent = "Wrong format, letters only";
  }
});

cardInput.addEventListener("input", function () {
  // Remove any existing spaces and non-numeric characters
  let cleanValue = cardInput.value.replace(/\D/g, "");

  // Add a space every 4 characters
  let formattedValue = cleanValue.replace(/(\d{4})/g, "$1 ");

  // Update the input value and the displayed card number
  cardInput.value = formattedValue.trim();
  cardNumber.textContent = formattedValue.trim();

  if (numbersOnly.test(cardInput.value)) {
    cardNumber.textContent = cardInput.value;
    errorCardNumber.textContent = "";
  } else {
    errorCardNumber.textContent = "Wrong format, numbers only";
  }
});

monthInput.addEventListener("input", function () {
  if (monthOnly.test(monthInput.value)) {
    cardMonth.textContent = monthInput.value;
    errorMonth.innerText = "";
  } else {
    errorMonth.innerText = "Enter Month";
  }
});

yearInput.addEventListener("input", function () {
  if (numbersOnly.test(yearInput.value)) {
    cardYear.textContent = yearInput.value;
    errorYear.innerText = "";
  } else {
    errorYear.innerText = "Can't be blank";
  }
});

cvcInput.addEventListener("input", function () {
  if (numbersOnly.test(cvcInput.value)) {
    cardCvc.textContent = cvcInput.value;
    cvcError.innerText = "";
  } else {
    cvcError.innerText = "Can't be blank";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formCompleteMessage.classList.toggle("hide");
  form.classList.toggle("hide");
});

continueButton.addEventListener("click", function () {
  formCompleteMessage.classList.toggle("hide");
  form.classList.toggle("hide");
});
