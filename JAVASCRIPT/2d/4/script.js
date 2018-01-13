function myFunction() {
	var season = document.getElementById("k1").value;
	if (season.toString().toLowerCase() === "summer") {
		myFunction1();
	} else if (season.toString().toLowerCase() === "winter") {
		myFunction2();
	} else if (season.toString().toLowerCase() === "autumn") {
		myFunction3();
	} else if (season.toString().toLowerCase() === "spring") {
		myFunction4();
	}
}

function myFunction1() {

	document.body.style.backgroundImage = "url('summer.jpg')";
}

function myFunction2() {

	document.body.style.backgroundImage = "url('winter.jpg')";
}

function myFunction3() {

	document.body.style.backgroundImage = "url('autumn.jpg')";
}

function myFunction4() {

	document.body.style.backgroundImage = "url('spring.jpg')";
}
