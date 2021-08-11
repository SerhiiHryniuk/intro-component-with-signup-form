let redColor = "#ff7a7a";
let grayColor = "#b9b6d3";
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let emailField = document.getElementById("email");
let pswdField = document.getElementById("pswd"); 
let errorIcons = document.getElementsByClassName("iconError");
let errorText = document.getElementsByClassName("errorMsg");
let returnTrue = [];

function check(){
    returnTrue[0] = checkFields(firstName, 0);
    returnTrue[1] = checkFields(secondName, 1); 
    returnTrue[2] = checkEmail() ? rightColor(emailField, 2) : falseColor(emailField, 2); 
    returnTrue[3] = checkFields(pswdField, 3);
    return returnTrue.every(e => e === true);
}

function checkChangeEmail(){
    checkEmail() ? rightColor(emailField, 2) : falseColor(emailField, 2);
}

function checkEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField.value).toLowerCase());
}

function checkFields(some, num){
    return some.value.length === 0 ? falseColor(some, num) : rightColor(some, num);
}

function falseColor(some, num){
    some.style.borderColor = redColor;
    errorIcons[num].style.display = "flex";
    errorText[num].style.display = "flex";
    return false;
}

function rightColor(some, num){
    some.style.borderColor = grayColor;
    errorIcons[num].style.display = "none";
    errorText[num].style.display = "none";
    return true;
}