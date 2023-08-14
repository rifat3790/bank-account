document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposit-field');
    const newDepositAmountString = depositeField.value;
    
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // get the deposit current amount
    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;

    const perviousDepositTotal = parseFloat(perviousDepositTotalString);

    const currentDepositeAmount = perviousDepositTotal + newDepositAmount;

    


    // get blance
    const blanceTotalElement = document.getElementById('blance-total');

    const perviousBlanceTotalString = blanceTotalElement.innerText;

    const perviousBlanceTotal = parseFloat(perviousBlanceTotalString);

    const currentBlanceTotal = perviousBlanceTotal + newDepositAmount;

    

    if(isNaN(newDepositAmount)){
        return alert("This not a valid number. please enter the valid number.")
    }
    else if(newDepositAmount < 0){
        return alert("Negative amount deposit is not possible. Please enter positive amount.")
    }
    else{
        depositTotalElement.innerText = currentDepositeAmount;
        blanceTotalElement.innerText = currentBlanceTotal;
    }


    // clear the deposite field
    depositeField.value = '';



})