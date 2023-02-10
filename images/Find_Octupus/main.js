const textarea = document.querySelector('textarea');
const button = document.querySelector('a');
const hint = document.querySelector('button');


let attempts = 0;

var test = 0 ; 

button.addEventListener('click', function() {
    test = 0 ;     
    displaySuccessToaster('Congratulations, you found it !');
     
});

hint.addEventListener('click', function() {
    test = 1 ;
    displaySuccessToaster("Listen up detective, the fate of the world rests on finding our feline friend! If the octopus's in trouble, then we're all in trouble! Get cracking and find that octopus before it's too late!");
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
    }, 5000);
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