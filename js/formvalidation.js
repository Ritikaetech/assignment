function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 if (reg.test(email)){
 return true; }
 else{
 return false;
 }
}
function validatePassword(password)
{
 var regp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/
 if (regp.test(password)){
 return true; }
 else{
 return false;
 }
}



$(document).ready(function(){
	$('#submit').click(function(){
		var email=$('#email').val();
		var password=$('#password').val();
		var confirm_password=$('#confirmpassword').val();
		if (email=='') {
			alert("THe email field can not be left empty");
			return true;
		}
		else if(!validateEmail(email)){
			alert('enter a valid email address : ex- abc@xyz.com');
			return true;
		}
		
		else if (password=='') {
			alert("THe password field can not be left empty");
			return false;
		}
		else if (password.length<5) {
			alert("password is not strong.Min Length is 5");
			return false;
		}
		else if(!validatePassword(password)){
			alert('password must be a combination of letters and numbers');
			return false;
		}
		
		else if (confirm_password=='') {
			alert("THe confirm password field can not be left empty");
			return false;
		}
	
		else if (password!=confirm_password) {
			alert("The passwords do not match");
			return false;
		}
		else if (!$("#terms_conditions").is(':checked')) {
			alert("PLease accept The terms and conditions");
			return false;
		}
		else{

			alert('Form Submitted Succesfully');
		
		}

	});
});