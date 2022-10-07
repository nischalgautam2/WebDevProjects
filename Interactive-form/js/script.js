//Make the first text field have the focus state by default to prompt the user.
const nameInput = document.getElementById('name');
nameInput.focus();


const jobRoleOption = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-job-role');
//"Other job role" text field should be hidden by default 
otherJobRoleInput.type = 'hidden';
//Display only when users select "Other" in the drop down menu
jobRoleOption.addEventListener("change", () => {
    if(jobRoleOption.value === 'other'){
        otherJobRoleInput.type = 'text';
    } else {
        otherJobRoleInput.type = 'hidden';
    }
});


//Disable and hide the color select element
const colorSelect = document.getElementById('color');
for (var options of colorSelect) {
    options.hidden = true;
    options.disabled = true;
}


//Program the "Design" <select> element to listen for user changes.
const designThemeSelect = document.getElementById('shirt-designs');
designThemeSelect.addEventListener("change", (e) => {
    for (let options of colorSelect) {
        options.disabled = false;
    }
    if (e.target.value === 'js puns') {
        for (let options of colorSelect) {
            colorSelect[1].hidden  = false; 
            colorSelect[2].hidden = false; 
            colorSelect[3].hidden = false; 

            colorSelect[4].hidden  = true; 
            colorSelect[5].hidden = true; 
            colorSelect[6].hidden = true; 
        }
    } else if (e.target.value === 'heart js') {
        for (let options of colorSelect) {
            colorSelect[1].hidden  = true; 
            colorSelect[2].hidden = true; 
            colorSelect[3].hidden = true;

            colorSelect[4].hidden  = false; 
            colorSelect[5].hidden = false; 
            colorSelect[6].hidden = false;  
        }
    }
});


//Payment Info Section
const paymentMethodSelect = document.getElementById('payment');

const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');

//Set payment method to credit card by default
paymentMethodSelect.value = 'credit-card';

//Hide the sections for other payment methods
paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

paymentMethodSelect.addEventListener('change', (e) => {
    if(e.target.value === 'credit-card') {
        creditCardDiv.hidden = false;
        paypalDiv.hidden = true;
        bitcoinDiv.hidden = true;
    } else if(e.target.value ==='paypal') {
        creditCardDiv.hidden = true;
        paypalDiv.hidden = false;
        bitcoinDiv.hidden = true;
    } else if(e.target.value ==='bitcoin') {
        creditCardDiv.hidden = true;
        paypalDiv.hidden = true;
        bitcoinDiv.hidden = false;
    }
});



//Register for activities section. 
//The "Total: $" element below the "Register for Activities" section should update
const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let activityTotalSum = 0;

activities.addEventListener("change", (e) => {
    const activitySelected = e.target; 
    const dataCost = parseInt(activitySelected.getAttribute('data-cost'));
    if(activitySelected.checked) {
        activityTotalSum += dataCost;  
    } else {
        activityTotalSum -= dataCost;
    }
    activitiesCost.innerHTML = `Total:$${activityTotalSum}`;
});



//Form validation 
const form = document.querySelector('form');
const valid = true; 
const invalid = false;

//Accessibility : Validation helper functions for pass or fail
function validationPass(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.lastElementChild.style.display = 'none';
    element.parentElement.classList.remove('not-valid');
}
function validationFail(element) {
    element.parentElement.classList.add('not-valid');;
    element.parentElement.lastElementChild.style.display = 'block';   
}

//Helper function for name input validation 
function nameValidator() {
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value);
    if(nameIsValid) {
        validationPass(nameInput);
        return valid;
    } else {
        validationFail(nameInput);
        return invalid;
    }
}

const emailInput = document.getElementById('email');
//Helper function for email address input validation
function emailValidator() {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    if(emailIsValid) {
        validationPass(emailInput);
        return valid;
    } else {
        validationFail(emailInput);
        return invalid;
    }
}

const activitiesSection = document.getElementById('activities-box')
//Helper function for activites selection   
function activitiesValidator() {
    const activitiesSelected = document.querySelectorAll('[type="checkbox"]:checked');
    if(activitiesSelected.length) {
        validationPass(activitiesSection);
        return valid;  
    }  else  {
        validationFail(activitiesSection);
        return invalid;
    }
 }

const creditCardInput = document.getElementById('cc-num');
//Helper function for credit card payment method 
function creditCardValidator() {
    const creditCardIsValid = /^[0-9]{13}(?:[0-9]{3})?$/.test(creditCardInput.value);
    if (creditCardIsValid) {
        validationPass(creditCardInput);
        return valid; 
    } else {
        validationFail(creditCardInput);
        return invalid; 
    }
}

const zipCodeInput = document.getElementById('zip');
//Helper function for zip code
function zipCodeValidator() {
    const zipIsValid = /^[0-9]{5}$/.test(zipCodeInput.value);
    if(zipIsValid) {
        validationPass(zipCodeInput);
        return valid; 
    } else {
        validationFail(zipCodeInput);
        return invalid; 
    }
}

const cvvInput = document.getElementById('cvv');
//Helper function for CVV
function cvvValidator() { 
    const cvvIsValid = /^[0-9]{3}$/.test(cvvInput.value);
    if(cvvIsValid) {
        validationPass(cvvInput);
        return valid; 
    } else {
        validationFail(cvvInput);
        return invalid; 
    }
}

//Event listener for form validation 
form.addEventListener("submit", (e) => {
    if(!nameValidator()) {
        e.preventDefault()
    }  
    if (!emailValidator()) {
        e.preventDefault()
    }  
    if (!activitiesValidator()) {
        e.preventDefault()
    }
    if(paymentMethod.value === 'credit-card') {
       if(!creditCardValidator()){
        e.preventDefault()
       } 
      if(!zipCodeValidator()) {
        e.preventDefault()
      }
       if (!cvvValidator()) {
        e.preventDefault()
       }
    }
}); 


//Accessibility 
const checkboxes = document.querySelectorAll('[type="checkbox"]');
//Loop over checkbox inputs listening for 'focus' and 'blur' events on targeted input. 
for(let i = 0; i < checkboxes.length; i++) {
    const parentElement = checkboxes[i].parentElement;
    checkboxes[i].addEventListener('focus', (e) => {
        parentElement.classList.add('focus');
    }) 
    checkboxes[i].addEventListener('blur', (e) => {
        parentElement.classList.remove('focus');
    })
}



