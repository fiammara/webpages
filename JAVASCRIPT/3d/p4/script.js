function GetVowels() {
	var str = document.getElementById("text").value;

	var VOa = 0;
	var VOe = 0;
	var VOi = 0;
	var VOo = 0;
	var VOu = 0;
	var VOy = 0;
	var dvigars = 0;
	var skaic = 0;
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i).toLowerCase() === "a") {
			VOa++;
		}
		if (str.charAt(i).toLowerCase() === "e") {
			VOe++;
		}
		if (str.charAt(i).toLowerCase() === "i") {
			VOi++;
		}
		if (str.charAt(i).toLowerCase() === "o") {
			VOo++;
		}
		if (str.charAt(i).toLowerCase() === "u") {
			VOu++;
		}
		if (str.charAt(i).toLowerCase() === "y") {
			VOy++;
		}

		if ((str.charAt(i) + str.charAt(i + 1) === "au") || (str.charAt(i) + str.charAt(i + 1) === "ai") || (str.charAt(i) + str.charAt(i + 1) === "ei") || (str.charAt(i) + str.charAt(i + 1) === "ie") || (str.charAt(i) + str.charAt(i + 1) === "ui") || (str.charAt(i) + str.charAt(i + 1) === "uo")) {
			dvigars++;
		}
		if (str.charAt(i).match(/^\d+$/)) {
			skaic++;
		}
	}

	document.getElementById("result1").innerHTML = "A raidziu:" + VOa;
	document.getElementById("result2").innerHTML = "E raidziu:" + VOe;
	document.getElementById("result3").innerHTML = "I raidziu:" + VOi;
	document.getElementById("result4").innerHTML = "O raidziu:" + VOo;
	document.getElementById("result5").innerHTML = "U raidziu:" + VOu;
	document.getElementById("result6").innerHTML = "Y raidziu:" + VOy;
	document.getElementById("result7").innerHTML = "Dvigarsiu:" + dvigars;
	document.getElementById("result8").innerHTML = "Skaiciu:" + skaic;
}
