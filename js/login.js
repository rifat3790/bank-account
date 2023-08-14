// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // spet-2: get the email address inside the email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // step-3: get password
    // 3.1: set id on the html element
    // 3.2 get the value from the element 
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    // Danger: DO NOT VERIFY email password on the client side
    // step-4: verify email and password

    if(email === '221902178@student.green.edu.bd' && password === 'r107754n'){
        console.log('valid user');
    }
    else{
        console.log('Invalid user.')
    }

})