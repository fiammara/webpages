function myFunction() {

	var result = document.getElementsByTagName('a').length;
	document.getElementById('result').innerHTML = "Nuorodu yra: " + result;
}

function myFunction2() {

	var headers = document.getElementsByTagName('h1');

	for (var i = 0; i < headers.length; i++) {
		headers[i].style.color = "green";
		headers[i].style.fontSize = "20px";
	}
}

function myFunction3() {
	var paragraphs = document.getElementById("maincol").getElementsByTagName('p');

	for (var i = 0; i < paragraphs.length; i++) {
		if (i % 2 === 0) {
			paragraphs[i].style.color = "blue";
		} else {
			paragraphs[i].style.color = "green";
		}
	}
}

function myFunction4() {
	var main = document.getElementById('maincol');
	var para = document.getElementsByTagName('p');
	for (var i = 0; i < para.length; i++) {
		if ((para[i].parentNode == main) && (i % 2 === 0)) {
			para[i].style.color = "green";
		}
		else if (para[i].parentNode == main) {
			para[i].style.color = "blue";
		}
	}
}
