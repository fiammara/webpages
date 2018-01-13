function myFunction1() {
	'use strict';

	var mase = document.getElementById("mase").value;
	var ugis = document.getElementById("ugis").value;
	
	if (mase < 0) 

		alert("Svoris negali buti neigiamas");
	if (ugis > 2) 

		alert("Iveskite ugi metrais");
	
	else {
	
	var result1 = Number(mase) / (Number(ugis) * Number(ugis));
	var result = Math.round(result1);
	document.getElementById("result").innerHTML = "KMI = " + result;


		
	if (result < 18.5)
		document.getElementById("comment").innerHTML = "Per mazas svoris";
	if (result >= 18.5 && result <= 25)
		document.getElementById("comment").innerHTML = "Normalus svoris";
	if (result >= 25 && result <= 30)
		document.getElementById("comment").innerHTML = "Nutukimas";
	if (result > 30)
		document.getElementById("comment").innerHTML = "Didelis nutukimas";}

}
