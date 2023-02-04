function calculateLoan() {
  //   console.log("calculate");
  // get the loan amount value and store it in loanAmountValue
  loanAmountValue = document.getElementById("loan-amount").value;
  //   console.log(loanAmountValue);
  // get the interest rate value and store it in interestRateValue
  interestRateValue = document.getElementById("interest-rate").value;
  // get the loan amount duration value and store it in monthsToPayValue
  monthsToPayValue = document.getElementById("months-to-pay").value;

  // calculate interest
  interest = (loanAmountValue * interestRateValue * 0.01) / monthsToPayValue;

  // monthly payment
  monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

  // target the paragraph to show monthly payment
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment : ${monthlyPayment}`;
}
