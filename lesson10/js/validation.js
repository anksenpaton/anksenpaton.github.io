function pwCompare() {

    var pw1 = document.getElementById('pw1').value;
    var pw2 = document.getElementById('pw2').value; 
    var enabled = false;


    /* if pw1 is the same as pw2 then enable the submit button */
    if (pw1 == pw2) {
        document.getElementById("pwMessage").innerHTML = "Match"
	enabled = true;
    } else {
        document.getElementById("pwMessage").innerHTML = "Doesn't Match"
	enabled = false;
    }
    if ((pw1  == pw2) && (pw2.length < 7)) {
        document.getElementById("pwMessage").innerHTML = "Too short. Min 7 characters."
	enabled = false;
    }

    if (enabled) {
        document.getElementById('submit').disabled = false; /* submit button enabled */
    } else {
        document.getElementById('submit').disabled = true; /* submit button not enabled */
    }
}

function charCheck() {

    var input1 = document.getElementById('input1').value;
    var enabled = false;


    /* if input1 container thiese characters then enable the submit button */
    if (input1.includes("!") || 
        input1.includes("@") ||                    
        input1.includes("#") ||                    
        input1.includes("(") ||                    
        input1.includes(")") ||                    
        input1.includes("$") ){
	enabled = true;
    } else {
	enabled = false;
    }

    if (enabled) {
        document.getElementById('submit1').disabled = false; /* submit button enabled */
    } else {
        document.getElementById('submit1').disabled = true; /* submit button disabled */
    }


}
