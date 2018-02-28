// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "name" && password == "pwd")
		{
			alert ("Login successful");
			window.location = "success.html"; //redirecting to other page
			return false;
		}
	else
	{
		alert ("error!");
	}
}