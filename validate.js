
function validate_data(){
    //name validation
var  name=document.getElementById("name").value;
var name_ptrn=/^[A-Za-z ]+$/gi;
if(name_ptrn.test(name)){
    let name_err=document.getElementById("err_name")
name_err.style.display = "block";
name_err.style.color = "green";
name_err.innerHTML="Done! You entered a valid name.";
   
}else{
let name_err=document.getElementById("err_name")
name_err.style.display = "block";
name_err.style.color = "red";
name_err.innerHTML="Please Sir enter a valid name !";
   return false;
}

 //email validation
 var  email=document.getElementById("email").value;
var email_ptrn=/^[A-z0-9._]{3,}@[A-z]{3,5}.[A-z]{3,5}$/gi;
if(email_ptrn.test(email)){
    let email_err=document.getElementById("err_email")
email_err.style.display = "block";
email_err.style.color = "green";
email_err.innerHTML="Done! You entered a valid email.";
  
}else{
let email_err=document.getElementById("err_email")
email_err.style.display = "block";
email_err.style.color = "red";
email_err.innerHTML="Please Sir enter a valid email !";
   return false;
}


 //mobile validation
 var  mobile=document.getElementById("mobile").value;
var mobile_ptrn=/^[0-9]{10,10}$/g;
if(mobile_ptrn.test(mobile)){
    let mobile_err=document.getElementById("err_mobile")
mobile_err.style.display = "block";
mobile_err.style.color = "green";
mobile_err.innerHTML="Done! You entered a valid mobile no.";

}else{
let mobile_err=document.getElementById("err_mobile")
mobile_err.style.display = "block";
mobile_err.style.color = "red";
mobile_err.innerHTML="Please Sir enter a valid mobile no.!";
   return false;
}

 //dob validation
 var  dob=document.getElementById("dob").value;
var dob_ptrn=/^(?:0[1-9]|[12]\d|3[01])([\/])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
if(dob_ptrn.test(dob)){
    let dob_err=document.getElementById("err_dob")
dob_err.style.display = "block";
dob_err.style.color = "green";
dob_err.innerHTML="Done! You entered a valid DOB .";
  
}else{
let dob_err=document.getElementById("err_dob")
dob_err.style.display = "block";
dob_err.style.color = "red";
dob_err.innerHTML="Please Sir enter a valid DOB : DD/MM/YYYY .!";
   return false;
}

 //password validation
 var  pass=document.getElementById("pass").value;
var pass_ptrn=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(pass_ptrn.test(pass)){
    let pass_err=document.getElementById("err_pass")
pass_err.style.display = "block";
pass_err.style.color = "green";
pass_err.innerHTML="Done! You entered a valid password .";
   return false;
}else{
let pass_err=document.getElementById("err_pass")
pass_err.style.display = "block";
pass_err.style.color = "red";
pass_err.innerHTML="Please Sir enter a valid password .!";
   return false;
}


}
