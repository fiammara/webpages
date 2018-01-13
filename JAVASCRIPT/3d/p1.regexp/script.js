function myFunction() {
	var letterNumber = /^[0-9a-zA-Z]+$/;
	var area = document.getElementById("text").value;

	if (area.match(letterNumber)) {
		return true;
	} else {
		alert("wrong symbol");
		return false;
	}
}
