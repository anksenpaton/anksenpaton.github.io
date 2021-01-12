
function getLastUpdateDate() {
    var dt = new Date();
    document.getElementById("updateDate").innerHTML = "Last Updated "
		+ 
		dt.toLocaleDateString();
}

