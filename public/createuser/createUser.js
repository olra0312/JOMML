formValidation = () => {

    const username = String(document.forms.createUser.username.value);
    const userNum = username.length;

    const password = String(document.forms.createUser.password.value);
    const secondPassword = String(document.forms.createUser.confirmPassword.value);
    const passNum = password.length;

    console.log(userNum);

if (userNum < 5){
    console.log(userNum)
    $("#username").css("border",  "2px solid red");
    return false;
}

if (passNum < 8){
    $("#password").css("border",  "2px solid red");
        
    return false;
    }
if (password !== secondPassword){
    $("<p style=\"color: red;\"> kodeordet er ikke ens </p>").insertAfter("#confirmPassword");
    $("#password").css("border",  "2px solid red");
    $("#confirmPassword").css("border",  "2px solid red");
    return false;
    }


    return true;
}