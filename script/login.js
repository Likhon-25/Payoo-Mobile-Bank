document.getElementById('login-btn')
    .addEventListener('click', function () {
        // 1- get the mobile number input
        const inputNumber = document.getElementById('input-number');
        const contactNumber = inputNumber.value;
        console.log(contactNumber)
        // - get the pin input 
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        console.log(pin);
        // 3- matvh pin & mobile number
        if(contactNumber == "01723252475" && pin == "2524"){
            // 3-1 true::>> alert> homepage
            alert("Login Sucessfully")
            // window.location.replace("/home.html")
            window.location.assign("/home.html")
        }
        else{
            // 3-2 false::>> alert> return
            alert("Login Faild");
            return
        }

    })