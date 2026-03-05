document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1- bank account add
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == 'Select a Bank') {
        alert("Please select a Bank");
        return
    }

    // 2- get bank account number
    const accountNo = getValueFromInput("add-money-number");
    if (accountNo.length !== 11) {
        alert("Invlain Account Number");
        return
    }

    // 3- get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);
    // console.log(newBalance)

    // 4- pin
    const pin = getValueFromInput("add-money-pin");
    if (pin === "2524") {
        alert(`Add Money Success from 
            ${bankAccount} 
            at ${new Date()}`);
        setBalance(newBalance)
    }
    else {
        alert("Invalid Pin");
        return
    }
})