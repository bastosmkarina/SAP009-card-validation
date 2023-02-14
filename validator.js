const validator = {
  isValid (creditCardNumber) {
    const newArray = [];
    for(let i = 0; i < creditCardNumber.length; i++) {
      const numCard = parseInt(creditCardNumber[i]);
      newArray.push(numCard)
    }

    const cardNumReverse = newArray.reverse();
    for (let i = 0; i < cardNumReverse.length; i++) {
      if ((i +1) % 2 === 0) {
        cardNumReverse[i] = cardNumReverse[i] * 2;
      }
      if (cardNumReverse[i] >= 10) {
        cardNumReverse[i] = cardNumReverse[i] - 9;
      }
    }

    let finalSum = 0
    for (let i = 0; i < cardNumReverse.length; i++) {
      finalSum = finalSum + cardNumReverse[i]
    }

    if (finalSum % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify (cardNumber) {
    const maskNumber = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if(i < cardNumber.length - 4) {
        maskNumber.push("#");
      } else {
        maskNumber.push(cardNumber[i])
      }
    }
    const masked = maskNumber.join("");
    return masked;
  }
}

export default validator;
