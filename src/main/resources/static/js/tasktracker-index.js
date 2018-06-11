/**
 * This file contains all scripts used in index.html
 */

function myFunction() {
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
        		registerActive = false;
        	}
        	
        	
        }
    });
    /* Menu and Register Index Animation */
});