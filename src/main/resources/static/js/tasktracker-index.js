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

    /* Register Form jQuery Validation - Checks if the fields have value in them */
    $('#register-form').submit(function(e){
    	var error = false;
    	var firstName = $('#fname').val().trim();
    	var lastName = $('#lname').val().trim();
    	var emailAddress = $('#eaddress').val().trim();
    	var password = $('#pword').val().trim();
    	var repeatPassword = $('#repeatpword').val().trim();
    	
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
    	} else {
    	    if(repeatPassword !== password){
                $('#errorNotSameRepeatPword').removeClass('hidden');
                error = true;
            }
        }
    	
    	if(error){
    		e.preventDefault();
    	}
    	
    	
    });
    /* Register Form jQuery Validation */

    /* Register Form Error Checker - Checks if a field has displayed an error
    *  and removes all error messages upon typing. Does nothing if the field
    *  has no errors. */

    $('#fname').keypress(function(){
        if($('#errorRequiredFname').hasClass('hidden')){

        } else {
            $('#errorRequiredFname').addClass('hidden');
        }
	})

    $('#lname').keypress(function(){
        if($('#errorRequiredLname').hasClass('hidden')){

        } else {
            $('#errorRequiredLname').addClass('hidden');
        }
    })

    $('#eaddress').keypress(function(){
        if($('#errorRequiredEaddress').hasClass('hidden')){

        } else {
            $('#errorRequiredEaddress').addClass('hidden');
        }
    })

    $('#pword').keypress(function(){
        if($('#errorRequiredPword').hasClass('hidden')){

        } else {
            $('#errorRequiredPword').addClass('hidden');
        }
    })

    $('#repeatpword').keypress(function(){
        if($('#errorRequiredRepeatPword').hasClass('hidden')){

        } else {
            $('#errorRequiredRepeatPword').addClass('hidden');
        }
        if($('#errorNotSameRepeatPword').hasClass('hidden')){

        } else {
            $('#errorNotSameRepeatPword').addClass('hidden');
        }
    })

    /* Register Form Error Checker */

    /* Register Form Password RegEx Checker - Checks if the password and repeat password fields contain
    *  the accepted characters and is greater than or equal to 8 characters. */

    $('#pword').keyup(function(){
        var pword = $('#pword').val().trim();

        if(pword.length < 8){
            $('#errorMinimumPword').removeClass('hidden');
        } else {
            $('#errorMinimumPword').addClass('hidden');

            if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pword)){
                $('#errorMustContainPword').addClass('hidden');
            } else {
                $('#errorMustContainPword').removeClass('hidden');
            }
        }
    })

    $('#repeatpword').keyup(function(){
        var repeatpword = $('#repeatpword').val();

        if(repeatpword.length < 8){
            $('#errorMinimumRepeatPword').removeClass('hidden');
        } else {
            $('#errorMinimumRepeatPword').addClass('hidden');

            if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(repeatpword)){
                $('#errorMustContainRepeatPword').addClass('hidden');
            } else {
                $('#errorMustContainRepeatPword').removeClass('hidden');
            }
        }
    })

    /* Register Form Password RegEx Checker */
});

