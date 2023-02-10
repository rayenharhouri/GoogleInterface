const textarea = document.querySelector('textarea');
const hint = document.getElementById('tn');
const button = document.getElementById('nt');

let attempts = 0;
var test = 0 ;
hint.addEventListener('click', function() {
    test = 1 ;
    displaySuccessToaster("Can you guess the year of birth of the athlete boy ?");
});
button.addEventListener('click', function() {
    test = 0 ;     
    displaySuccessToaster('Congratulations, you found it !');  
});
button.addEventListener('click', function() {
    const userGuess = textarea.value;
    if (userGuess === '1999') {
        displaySuccessToaster('Congratulations, your answer is correct!');

    } else {
        displayFailureToaster('Your answer is incorrect, please try again!');
        if (attempts === 3) {
            alert('Hint 1: Check the code written on the boy\'s t-shirt');
        }
        attempts++;
        displayAttempts();
    }
});

function displaySuccessToaster(message) {
    const successToaster = document.querySelector('#success-toaster');
    const successMessage = document.querySelector('#success-message');
    successMessage.textContent = message;
    successToaster.style.display = 'block';
    if (test==1) {
        successToaster.style.backgroundColor = 'orange';
    } else {
        successToaster.style.backgroundColor = 'green';
    }

    setTimeout(function() {
        successToaster.style.display = 'none';
    }, 3000);
}

function displayFailureToaster(message) {
    const failureToaster = document.querySelector('#failure-toaster');
    const failureMessage = document.querySelector('#failure-message');
    failureMessage.textContent = message;
    failureToaster.style.display = 'block';

    setTimeout(function() {
        failureToaster.style.display = 'none';
    }, 3000);
}

function displayAttempts() {
    document.getElementById("attempts").innerHTML = "Incorrect attempts : " + attempts;
}