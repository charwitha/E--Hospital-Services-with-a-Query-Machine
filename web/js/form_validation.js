/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function pform_validation() {

    var fname = document.reg_form.fname;
    var uemail = document.reg_form.email;
    var uid = document.reg_form.username;
    var passid = document.reg_form.password;
    var repassid = document.reg_form.repassword;
    var phone = document.reg_form.phone;

    if (allLetter(fname)) {
        if (ValidateEmail(uemail)) {
            if (userid_validation(uid, 5, 12)) {
                if (passid_validation(passid, repassid, 6, 12)) {
                        if (allnumeric(phone)) {
                        return true;
                        }
                    }
                }
            }
        }
    return false;
}

function dform_validation() {

    var dname = document.doctor_reg.dname;
    var uid = document.doctor_reg.username;
    var passid = document.doctor_reg.password;
    var repassid = document.doctor_reg.repassword;
    var phone = document.doctor_reg.phone;

    if (allLetter(dname)) {
            if (userid_validation(uid, 5, 12)) {
                if (passid_validation(passid, repassid, 6, 12)) {
                        if (allnumeric(phone)) {
                        return true;
                        }
                    }
                }
             }
    return false;
}

function cform_validation() {

    var name = document.contactform.Name;
    var email = document.contactform.Email;

    if (allLetter(name)) {
        if (ValidateEmail(email)) {
            return true;
        }
    }
    return false;
}

function bform_validation() {

    var phone = document.bookform.phone;

    if(allnumeric(phone)) {
            return true;
        }
        return false;
}

//--------------functions-------------------------------------------------------

    function allLetter(name) {

        var letters = /^[A-Za-z\s]+$/;
        if ((name.value.match(letters))) {
            return true;
        }
        else {
            alert('Name must have alphabet characters only');
            name.focus();
            return false;
        }
    }

    function ValidateEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            email.focus();
            return false;
        }
    }

    function userid_validation( uid, mx, my) {
        var uid_content = /^[0-9a-zA-Z]+$/;
        var uid_len = uid.value.length;
        if(uid.value.match(uid_content)){
        if (uid_len == 0 || uid_len >= my || uid_len < mx) {
            alert("User Id should not be empty / length be between " + mx + " to " + my);
            uid.focus();
            return false;
        } }
        else {
            alert("Username should not contain spaces");
            uid.focus();
            return false;
        }
        return true;
    } 

    function passid_validation(passid, repassid, mx, my) {
        var passid_len = passid.value.length;
        if (passid_len == 0 || passid_len >= my || passid_len < mx) {
            alert("Password should not be empty / length be between " + mx + " to " + my);
            passid.focus();
            return false;
        }
        if (passid.value != repassid.value) {
            alert("Passwords do not match");
            passid.focus();
            repassid.focus();
            return false;
        }
        return true;
    }

    function allnumeric(phone) {
        var numbers = /^[0-9]+$/;
        if (phone.value.match(numbers) && phone.value.length==10) {
        return true;
        }
        else {
            alert("Enter valid phone number");
            phone.focus();
            return false;
        }
    }
