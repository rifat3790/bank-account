document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Input field value starts
    const withdrawField = document.getElementById('withdraw-field');

    // Input withdraw value
    const newWithdrawAmountString = withdrawField.value;
    
    const newWithdrawAmount = parseFloat (newWithdrawAmountString);
    // console.log(newWithdrawAmount)

    // Display withdraw field starts
    const withdrawTotalField = document.getElementById('withdraw-total');

    const withdrawTotalAmountString = withdrawTotalField.innerText;

    const previousWithdrawTotalAmount = parseFloat (withdrawTotalAmountString);
    // console.log(previousWithdrawTotalAmount)
    // End display withdraw field 

    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawTotalAmount;

    

    // balance field
    const blanceTotalElement = document.getElementById('blance-total');

    const blanceTotalAmountString = blanceTotalElement.innerText;

    const blanceTotalAmount = parseFloat (blanceTotalAmountString);

    const currentBlanceTotal = blanceTotalAmount - newWithdrawAmount;

    

    if(isNaN(newWithdrawAmount)){
        return alert("Please enter valid numer.")
    }
    else if(newWithdrawAmount < 0){
        return alert("Negative amount withdraw is not possible. Please enter positive amount");
    }
    else if(newWithdrawAmount > blanceTotalAmount){
        return alert("Insufficient balance. Please waiting for deposit.")
    }
    else{
        withdrawTotalField.innerText = currentWithdrawAmount;
        blanceTotalElement.innerText = currentBlanceTotal;
    }
    

    withdrawField.value = '';
    


})