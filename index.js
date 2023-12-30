document.addEventListener('DOMContentLoaded',function() {
var today=new Date();
var tommorow=new Date();
tommorow.setDate(today.getDate()+1);
document.getElementById('startDate').min=tommorow.toISOString().split('T')[0];
var endDate=new Date();
endDate.setDate(tommorow.getDate()+1);
document.getElementById('endDate').min=endDate.toISOString().split('T')[0];
var dobDate=new Date();
dobDate.setDate(tommorow.getDate()-365);
document.getElementById("RegDOb").max=dobDate.toISOString().split('T')[0];

});



function getEndDate(){
    document.getElementById('endDate').disabled=false;
    document.getElementById('endDate').title='';
    var endDate=new Date(document.getElementById('startDate').value);
endDate.setDate(endDate.getDate()+1);
document.getElementById('endDate').min=endDate.toISOString().split('T')[0];
}

function bookingSuccesfulPopUp(){
    alert("Happy Vacation's! Your Booking is Succesfull");
    document.getElementById("bookingForm").reset();
}

function onClickRegister(){
    document.getElementById('RegisterModalContainer').style.display='block';
}

function onClickCancel(){
    document.getElementById('RegisterModalContainer').style.display='none';
}

function onClickLogin(){
    document.getElementById('LoginModalContainer').style.display='block';
}

function onClickCancelLogin(){
    document.getElementById('LoginModalContainer').style.display='none';
}

function onClickLoginFromRegister(){
    onClickCancel();
    onClickLogin();
}

function onClickRegisterFromLogin(){
    onClickCancelLogin();
    onClickRegister();
}


function validateRegisterForm(event) {
    var name = document.getElementById("RegName").value;
    var email = document.getElementById("RegEmail").value;
    var password = document.getElementById("RegPass").value;
    var contactNumber = document.getElementById("RegNumber").value;
    var dob=document.getElementById("RegDOb").value;

    if(!name || !email || !password || !contactNumber || !dob){
        return false;
    }


    var nameRegex = /^[a-zA-Z]+$/;
    if (!name==NaN && !nameRegex.test(name)) {
        alert("Name should only contain alphabets.");
        event.preventDefault();
        return false;
    }

    if(name.length<3){
        alert("Name should be atleast of size 3");
        event.preventDefault();
        return false;
    }
    
    var phoneRegex = /^\d{10}$/;
    if(!phoneRegex.test(contactNumber)){
        alert("PhoneNumber should be of size 10");
        event.preventDefault();
        return false;
    }

    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (age < 10) {
       alert ("You must be at least 10 years old.");
       event.preventDefault();
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        event.preventDefault();
        return false;
    }
    
    var passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{5,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password should contain at least one special character.");
        event.preventDefault();
        return false;
    }

    
    alert("Successfully Registered");

    return true;
}


function validateLoginForm(event){
   
    var email = document.getElementById("LoginEmail").value;
    var password = document.getElementById("LoginPass").value;
    var valEmail="Akshay@gmail.com";
    var valPass="Jain@Project";


    if(!email || !password){
        return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        event.preventDefault();
        return false;
    }
    

    var passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{5,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password should contain at least one special character.");
        event.preventDefault();
        return false;
    }
    
    if(valEmail===email && valPass===password){
    alert("Login Successfull");
    }
    else{
        alert("Email and password combination don't match");
        event.preventDefault();
        return false;
    }


    return true;
    
}
