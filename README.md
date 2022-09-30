# Register_form_with_regex_validation
Validation of registration form  using regex pattern in Javascript.

Full Name Regex :  /^[A-Za-z ]+$/gi

Email Regex :   /^[A-z0-9._]{3,}@[A-z]{3,5}.[A-z]{3,5}$/gi

Mobile No. Regex :  /^[0-9]{10,10}$/g

Date of Birth Regex :  /^(?:0[1-9]|[12]\d|3[01])([\/])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/
    
      Date Regex: (?:0[1-9]|[12]\d|3[01])
      Month Regex: (?:0[1-9]|1[012])
      Year Regex: (?:19|20)\d\d 


Password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      

![Registration form](https://raw.githubusercontent.com/nitishup94/Register_form_with_regex_validation/main/registration_form.png)
