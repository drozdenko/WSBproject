
// <!-- validate email -->
function checkEmail() {

    var email = document.getElementById('myEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

// <!-- validate form -->

function validate(e){
	var userName = document.getElementById("name").value;
	var password = document.getElementById("message").value;
	var errors = [];

	if (!checkLength(userName,1,100)) {
		errors[errors.length] = "What is your name?";
	}

	if (!checkLength(password,1,100)) {
		errors[errors.length] = "What is your question?";
	}

	if (errors.length > 0) {
		reportErrors(errors);
		e.preventDefault();
	}
}

function checkLength(text, min, max){

	if (text.length < min || text.length > max) {
		return false;
	}
	return true;
}

function reportErrors(errors){
	var msg = "There were some problems...\n";
	var numError;
	for (var i=0; i<errors.length; i++) {
		numError = i + 1;
		msg += "\n" + numError + ". " + errors[i];
	}
	alert(msg);
}
window.onload = function() {
	document.getElementById("contactForm").addEventListener("submit", function(e){
    	validate(e);
	});
}
