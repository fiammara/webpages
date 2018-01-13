function myFunction() {

	var num = /^\d+$/;
	var area = document.getElementById("text").value.toString();
	var begin = area.substring(0, 2);
	var middle = area.substring(2, 11);
	var end = area.substring(11, 13);


	if ((begin === "RN") && (middle.match(num)) && (end === "LT")) {

		alert("Registruota siunta");
	} else if ((begin === "CN") && (middle.match(num)) && (end === "LT")) {

		alert("x siunta");
	} else if ((begin === "EE") && (middle.match(num)) && (end === "LT")) {

		alert("y siunta");
	} else {
		alert("error");

	}
}
