import validator from './validator.js';

const form = document.getElementById("form")
const alertCard = document.getElementById("cardvalidation")

form.addEventListener("submit", cardValidator);

function cardValidator(e) {
  e.preventDefault()
  const cardNumber = document.getElementById("ccNumber").value;
  const validresult = validator.isValid(cardNumber);
  const maskedNumbers = validator.maskify(cardNumber)

  if (cardNumber.length <= 13) {
    return alertCard.innerHTML = " Ops, o número do cartão está incompleto. ";
  } else if (validresult === true) {
    return alertCard.innerHTML = " Tudo certo, o seu cartão de número " + maskedNumbers + " é válido! ";
  } else {
    return alertCard.innerHTML = " Ops, cartão inválido, digite novamente. ";
  }
}
