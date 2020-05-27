// formvalidation will run on press on the submit butoon
// It will return false if criteria is not fulfilled.
formValidation = () => {

    //Acces the values of the form data.
    const username = String(document.forms.createUser.username.value);
    const password = String(document.forms.createUser.password.value);
    const secondPassword = String(document.forms.createUser.confirmPassword.value);
    const emailValue = email.value;
    
    // Getting the lenght of the strings
    const passwordLenght = password.length;
    const usernameLenght = username.length;
    const phoneNumberValueLenght = phoneNumber.value.length;
    
    //Making regular expression look after emails
    const regexFastA = /@/;
    const regexDot = /.com|.dk|.uk|.org/;
    
    // Condition for submitting
    if (!regexFastA.test(emailValue) || !regexDot.test(emailValue) ||  phoneNumberValueLenght !== 8) {
        return false
    } 
    else if (usernameLenght < 4 || passwordLenght < 8 || password !== secondPassword){
       return false;
    }

    return true
}



const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


email.addEventListener("keyup", () => {
    const emailValue = email.value;
    const regexFastA = /@/;
    const regexDot = /.com|.dk|.uk|.org/;

    if (!regexFastA.test(emailValue) || !regexDot.test(emailValue)) {
        $("#email").css("border", "0.1em solid red");
    }
    else {
        $("#email").css("border", "0.1em solid green");
    }
    
});

phoneNumber.addEventListener("keyup", () => {
    const phoneNumberValueLenght = phoneNumber.value.length;
    if (phoneNumberValueLenght !== 8 ){
 
        $("#phoneNumber").css("border", "0.1em solid red");
    }
    else {
        $("#phoneNumber").css("border", "0.1em solid green");
    }
    
});

username.addEventListener("keyup", () => {
    const usernameValueLenght = username.value.length;
    if (usernameValueLenght < 4){
        $("#username").css("border", "0.1em solid red");
    }
    else {
        $("#username").css("border", "0.1em solid green");
    }
});

password.addEventListener("keyup", () => {
   const passwordValueLenght = password.value.length;
   if (passwordValueLenght < 8){
       $("#password").css("border", "0.1em solid red");
   }
   else {
       $("#password").css("border", "0.1em solid green");
}
});

confirmPassword.addEventListener("keyup", () => {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    if (passwordValue !== confirmPasswordValue){
        $("#confirmPassword").css("border", "0.1em solid red");
    } 
    else {
        $("#confirmPassword").css("border", "0.1em solid green");
    }
});

// More to add with more infor
/*
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const zipCode = document.getElementById("zipCode");
const city = document.getElementById("city");


//test cases with eventlisteners

firstName.addEventListener("keyup", () => {
    const firstNameLenght = firstName.value.length;
    if (firstNameLenght === 0){
        $("#firstName").css("border", "0.1em solid red");
    }
    else {
        $("#firstName").css("border", "0.1em solid green");
    }
});

lastName.addEventListener("keyup", () => {
    const lastNameLenght = lastName.value.length;
    if (lastNameLenght === 0){
        $("#lastName").css("border", "0.1em solid red");
    } 
    else {
        $("#lastName").css("border", "0.1em solid green");
    }
});

address.addEventListener("keyup", () => {
    const addressValueLenght = address.value.length;
    if (addressValueLenght === 0){
        $("#address").css("border", "0.1em solid red");
    }
    else {
        $("#address").css("border", "0.1em solid green");
    }
});

zipCode.addEventListener("keyup", () => {
    const zipCodeValueLenght = zipCode.value.length;
    if (zipCodeValueLenght == 4){
        $("#zipCode").css("border", "0.1em solid red");
    }
    else {
        $("#zipCode").css("border", "0.1em solid green");
    }
});

city.addEventListener("keyup", () => {
    const cityValueLenght = city.value.length;
    if (cityValueLenght === 0){
        $("#city").css("border", "0.1em solid red");
    }
    else {
        $("#city").css("border", "0.1em solid green");
    }
});
*/

