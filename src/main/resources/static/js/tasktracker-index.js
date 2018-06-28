/**
 * This file contains all scripts used in index.html
 */

function dropdownNav() {
	/* Responsive Navigation Bar */
	/* Turns the navigation bar to bars if screen is under 768px */
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    /* Responsive Navigation Bar */
}

$(document).ready(function () {
	/* Menu and Register Index Animation */
	/* Fades the Menu or Register Index in or out depending on the status */
    var registerActive = false;
    $("#register").click(function () {
        if (registerActive = !registerActive) {
        	/* Show Register Index */
        	$("#menu-index").fadeOut("slow", complete);
        	
        	function complete(){
        		$("#register-index").fadeIn("slow");
        		registerActive = true;
        	}
        	
        	
        }
    });
    $("#registerCancel").click(function () {
        if (registerActive = registerActive) {
        	/* Hide Register Index */
        	$("#register-index").fadeOut("slow", complete);
        	
        	function complete(){
        		$("#menu-index").fadeIn("slow");
        		
        		/* Remove all error messages from the register form */
        		$('#errorRequiredFname').addClass('hidden');
        		$('#errorRequiredLname').addClass('hidden');
        		$('#errorRequiredEaddress').addClass('hidden');
        		$('#errorRequiredPword').addClass('hidden');
        		$('#errorRequiredRepeatPword').addClass('hidden');
        		registerActive = false;
        	}
        	
        	
        }
    });
    /* Menu and Register Index Animation */
    /* Register Form jQuery Validation */
    $('#register-form').submit(function(e){
    	var error = false;
    	var firstName = $('#fname').val();
    	var lastName = $('#lname').val();
    	var emailAddress = $('#eaddress').val();
    	var password = $('#pword').val();
    	var repeatPassword = $('#repeatpword').val();
    	
    	if(!firstName){
    		$('#errorRequiredFname').removeClass('hidden');
    		error = true;
    	}
    	if(!lastName){
    		$('#errorRequiredLname').removeClass('hidden');
    		error = true;
    	}
    	if(!emailAddress){
    		$('#errorRequiredEaddress').removeClass('hidden');
    		error = true;
    	}
    	if(!password){
    		$('#errorRequiredPword').removeClass('hidden');
    		error = true;
    	}
    	if(!repeatPassword){
    		$('#errorRequiredRepeatPword').removeClass('hidden');
    		error = true;
    	}
    	
    	if(error){
    		e.preventDefault();
    	}
    	
    	
    });
    /* Register Form jQuery Validation */
});

