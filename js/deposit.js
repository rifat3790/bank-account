document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposit-field');
    const newDepositAmountString = depositeField.value;
    
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // get the deposit current amount
    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;

    const perviousDepositTotal = parseFloat(perviousDepositTotalString);

    const currentDepositeAmount = perviousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositeAmount;


    // get blance
    const blanceTotalElement = document.getElementById('blance-total');

    const perviousBlanceTotalString = blanceTotalElement.innerText;

    const perviousBlanceTotal = parseFloat(perviousBlanceTotalString);

    const currentBlanceTotal = perviousBlanceTotal + newDepositAmount;

    blanceTotalElement.innerText = currentBlanceTotal;


    // clear the deposite field
    depositeField.value = '';



})