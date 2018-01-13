function myFunction1() {
	'use strict';

	var k1 = document.getElementById("k1").value;
	var k2 = document.getElementById("k2").value;
	var k3 = document.getElementById("k3").value;

	if ((Number(k1) + Number(k2) < Number(k3)) || (Number(k1) + Number(k3) < Number(k2)) || (Number(k2) + Number(k3) < Number(k1))) {
		alert("Trikampio negalima sudaryti");
	}

	if ((k1 <= 0) || (k2 <= 0) || (k3 <= 0)) {

		alert("Kraštinė negali būti 0 arba neigiama");

	} else {
		var p = (Number(k1) + Number(k2) + Number(k3)) / 2;
		
		if ((Number(k1)===p)|| (Number(k2)===p) ||Number(k3)===p)  alert("Neteisingai įvesti duomenys");

		var result = Math.sqrt((p - k1) * (p - k2) * (p - k3) * p);

		document.getElementById("result").innerHTML = "Trikampio plotas = " + result;

	}

}

