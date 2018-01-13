function myFunction1() {
	var sk1 = document.getElementById("f1").value;
	var sk2 = document.getElementById("f2").value;

	document.getElementById("result").innerHTML = "Rezultatas = " + (Number(sk1) + Number(sk2));
}

function myFunction2() {
	var sk1 = document.getElementById("f1").value;
	var sk2 = document.getElementById("f2").value;
	document.getElementById("result").innerHTML = "Rezultatas = " + (Number(sk1) - Number(sk2));
}

function myFunction3() {
	var sk1 = document.getElementById("f1").value;
	var sk2 = document.getElementById("f2").value;
	document.getElementById("result").innerHTML = "Rezultatas = " + (Number(sk1) * Number(sk2));
}

function myFunction4() {
	var sk1 = document.getElementById("f1").value;
	var sk2 = document.getElementById("f2").value;
	document.getElementById("result").innerHTML = "Rezultatas = " + (Number(sk1) / Number(sk2));
}
