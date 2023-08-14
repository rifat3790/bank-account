document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposit-field');
    const depositAmount = depositeField.value;
    
    // get the deposit current amount
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})