const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

let attempts = 0;

button.addEventListener('click', function() {
    const userGuess = textarea.value;
    if (userGuess === '2000') {
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