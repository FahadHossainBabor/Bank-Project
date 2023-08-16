document.getElementById("deposit-btn").addEventListener("click", function () {
  let newDeposit = document.getElementById("deposit-textarea").value; //value inserted in the deposit field.

  //Just for practice in preli level
  //current deposit total
  //This is not a input tag,so we will use innerText instead of .value
  //   const depositElementTotal = document.getElementById("deposit-total");
  //   const depositTotal = depositElementTotal.innerText;
  //   depositElementTotal.innerText = deposit;

  const previosDepositTotal =
    document.getElementById("deposit-total").innerText;

  let currentDepositTotal =
    parseFloat(previosDepositTotal) + parseFloat(newDeposit);

  document.getElementById("deposit-total").innerText = currentDepositTotal;

  //Updating the total balance

  //getting the pervious amount as innertext( not a input value but a normal text)
  const prevTotalAmount = document.getElementById("total-amount").innerText;

  //updating the current balance
  const totalAmount = parseFloat(prevTotalAmount) + parseFloat(newDeposit);

  //show it 
  document.getElementById("total-amount").innerText = totalAmount;

  //clearing the deposit field
  document.getElementById("deposit-textarea").value = "";
});
