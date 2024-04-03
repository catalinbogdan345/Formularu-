
// first name
const firstNameInput = document.querySelector('[name="first-name"]');
const firstNameText = document.querySelector('.first-name-text');

const handleFirstNameInput = () => {
    firstNameText.innerText = firstNameInput.value;
};

firstNameInput.addEventListener('input', handleFirstNameInput);


// last name
const lastNameinput = document.querySelector('[name = "last-name"]');
const lastNameText = document.querySelector('.last-name-text');

const handleLastNameInput = () =>{
    lastNameText.innerText = lastNameinput.value
}
lastNameinput.addEventListener('input', handleLastNameInput)


// email

const emailInput = document.querySelector('[name = "email"]');
const emailText = document.querySelector('.card-email-text');

const emailHandler = ()=>{
    emailText.innerText =   emailInput.value ;
};
emailInput.addEventListener('input', emailHandler)


// location

const locationSelect = document.querySelector('[name = "countries"]');
const locationText = document.querySelector('.location-text');

const locationHandler = () =>{
    locationText.innerText = locationSelect.value;
}
locationSelect.addEventListener('click', locationHandler)



// linkedin
const linkedinInput = document.querySelector('[name = "linkedin"]');
const linkedinText = document.querySelector('.linkedin-text');

const linkedinHandler= () =>{
    linkedinText.innerText = linkedinInput.value;
};
linkedinInput.addEventListener('input', linkedinHandler )


// ---- String Includes -----

// const numeleMeu = 'Cristian';

// // if (numeleMeu.includes('sti') === true) {
//     alert('Numele tau include sti');
// }