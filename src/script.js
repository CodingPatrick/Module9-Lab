// https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_check
// https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
// https://www.codexworld.com/add-timepicker-to-input-field-jquery-plugin/

let fName = "";
let fEmail = "";
let fTelephone = "";

export function checkValidation() {
    var vName = validateName();
    var vEmail = validateEmail();
    var vTelephone = validateTelehone();
    var vCardName = validateCardName();
    var vCardNumber = validateCardNumber();
    var vCardExpirationDate = validateCardExpirationDate();
    var vCardCVV = validateCardCVV();
    if (vName === true && vEmail === true && vTelephone === true && vCardName === true && vCardNumber === true && vCardExpirationDate === true && vCardCVV === true) {
        alert("Your payment has been confirmed. You will receive an email notice shortly. \n\n Name: "+fName+"\n Email: "+fEmail+"\n Telephone: "+fTelephone);
        window.location.reload();
    } else {
        alert("Oops. Looks like the form was not filled in properly. Please check again.");
    }
}

function validateName() {
    var name = document.getElementById("name").value;
    let valid = true;
    if (name.length === 0) {
        valid = "Please enter your name."
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-name").innerHTML = "";
        document.getElementById("name").className = "form-control";
        fName = name;
    } else {
        document.getElementById("invalid-feedback-name").innerHTML = valid;
        document.getElementById("name").className = "form-control red";
    }
    return valid;
}

function validateEmail() {
    var eRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var email = document.getElementById("email").value;
    let valid = true;
    if (eRegex.test(email) === false) {
        valid = "Invalid email address. Must be under the form: username@server.domain"
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-email").innerHTML = "";
        document.getElementById("email").className = "form-control";
        fEmail = email;
    } else {
        document.getElementById("invalid-feedback-email").innerHTML = valid;
        document.getElementById("email").className = "form-control red";
    }
    return valid;
}

function validateTelehone() {
    var pRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    var telephone = document.getElementById("telephone").value;
    let valid = true;
    if (pRegex.test(telephone) === false) {
        valid = "Invalid phone number. Must be under the format: XXXXXXXXXX"
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-telephone").innerHTML = "";
        document.getElementById("telephone").className = "form-control";
        fTelephone = telephone;
    } else {
        document.getElementById("invalid-feedback-telephone").innerHTML = valid;
        document.getElementById("telephone").className = "form-control red";
    }
    return valid;
}

function validateCardName() {
    var cardname = document.getElementById("cardname").value;
    let valid = true;
    if (cardname.length === 0) {
        valid = "Please enter the name on the card."
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-cardname").innerHTML = "";
        document.getElementById("cardname").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardname").innerHTML = valid;
        document.getElementById("cardname").className = "form-control red";
    }
    return valid;
}

function validateCardNumber() {
    var cRegex = /^\(?([0-9]{4})\)?[-.●]?([0-9]{4})[-.●]?([0-9]{4})[-.●]?([0-9]{4})$/;
    var cardnumber = document.getElementById("cardnumber").value;
    let valid = true;
    if (cRegex.test(cardnumber) === false) {
        valid = "Invalid card number. Must be under the format: XXXXXXXXXXXXXXXX"
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-cardnumber").innerHTML = "";
        document.getElementById("cardnumber").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardnumber").innerHTML = valid;
        document.getElementById("cardnumber").className = "form-control red";
    }
    return valid;
}

function validateCardExpirationDate() {
    var cRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    var cardexpirationdate = document.getElementById("cardexpirationdate").value;
    let valid = true;
    if (cRegex.test(cardexpirationdate) === false) {
        valid = "Invalid expiration date. Must be under the format: XX/XX or XXXX"
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-cardexpirationdate").innerHTML = "";
        document.getElementById("cardexpirationdate").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardexpirationdate").innerHTML = valid;
        document.getElementById("cardexpirationdate").className = "form-control red";
    }
    return valid;
}

function validateCardCVV() {
    var cRegex = /^[0-9]{3}$/;
    var cardcvv = document.getElementById("cardcvv").value;
    let valid = true;
    if (cRegex.test(cardcvv) === false) {
        valid = "Invalid CVV number. Must be under the format: XXX"
    }
    if (valid === true) {
        document.getElementById("invalid-feedback-cardcvv").innerHTML = "";
        document.getElementById("cardcvv").className = "form-control";
    } else {
        document.getElementById("invalid-feedback-cardcvv").innerHTML = valid;
        document.getElementById("cardcvv").className = "form-control red";
    }
    return valid;
}

export function changeTraining() {
	document.getElementById("tr").className = "nav-link";
	document.getElementById("bo").className = "nav-link text-white"
	document.getElementById("ch").className = "nav-link text-white";
	document.getElementById("ne").className = "nav-link text-white";
}

export function changeBooking() {
	document.getElementById("tr").className = "nav-link text-white";
	document.getElementById("bo").className = "nav-link"
	document.getElementById("ch").className = "nav-link text-white";
	document.getElementById("ne").className = "nav-link text-white";
}

export function changeChat() {
	document.getElementById("tr").className = "nav-link text-white";
	document.getElementById("bo").className = "nav-link text-white"
	document.getElementById("ch").className = "nav-link";
	document.getElementById("ne").className = "nav-link text-white";
}

export function changeNews() {
	document.getElementById("tr").className = "nav-link text-white";
	document.getElementById("bo").className = "nav-link text-white"
	document.getElementById("ch").className = "nav-link text-white";
	document.getElementById("ne").className = "nav-link";
}

export function ShowAndHide1() {
    var x = document.getElementById('section1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

export function ShowAndHide2() {
    var x = document.getElementById('section2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

export function ShowAndHide3() {
    var x = document.getElementById('section3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

export function ShowAndHide4() {
    var x = document.getElementById('section4');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

export function ShowAndHide5() {
    document.getElementById('mess').value = ''
    var x = document.getElementById('section6');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}