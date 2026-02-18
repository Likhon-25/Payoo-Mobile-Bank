console.log("withdraw done")
document.getElementById('cashout-btn').addEventListener('click', function () {
    // 1- get the agent number & validate
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cahsoutNumber = cashoutNumberInput.value;
    console.log('Agent Number =', cahsoutNumber)
    if(cahsoutNumber.length !== 11){
        alert('Invlid Agent Number')
        return
    }
    // 2- get the amount , validate, convert to number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log('cashout Amount = ', cashoutAmount)
    // 3- get the Current Balance, valdate, convert to number
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText;
    console.log('Balance = ', balance)
    // 4- Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return
    }
    // 5- Get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;
    if (pin === '2524') {
        // 5-1 true:: show an alert > set Balance
        alert('Cashout Successfully')
        console.log("New Balance = ", newBalance);
        balanceElement.innerText = newBalance
    }
    else{
        // 5-1 false:: show an error alert > return
        alert('Invlaid Password')
    }
})