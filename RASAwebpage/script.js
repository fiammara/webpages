// Quiz part. Used variables and arrays.
var quizzArr = [
		[{
			name: 'TOKIJAS',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'PEKINAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'BANKOKAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'SIDNĖJUS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}],

		[{
			name: 'LONDONAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'BERLYNAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'BARSELONA',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'VAŠINGTONAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}],

		[{
			name: 'DELIS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'PEKINAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'VARŠUVA',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'LIMA',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		}],

		[{
			name: 'ABU DABIS',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'RYGA',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'ATĖNAI',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'ROMA',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}],

		[{
			name: 'SIDNĖJUS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'MADRIDAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'NIUJORKAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'PEKINAS',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		}],

		[{
			name: 'AMSTERDAMAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'LONDONAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'SIDNĖJUS',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'DŽAKARTA',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}],

		[{
			name: 'MASKVA',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'ROMA',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'MINSKAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'HELSINKIS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}],

		[{
			name: 'REIKJAVIKAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'TAIPĖJUS',
			points: 1,
			color: 'green',
			check: 'Teisingai'
		},
		{
			name: 'MADRIDAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		},
		{
			name: 'KIJEVAS',
			points: 0,
			color: 'red',
			check: 'Neteisingai'
		}]
	  ];

varImageArray = [
		 "images/tokyo2.jpg", "images/barcelona.jpg", "images/peru.jpg", "images/abudabi.jpg", "images/pekinas.jpg",
		 "images/australia.jpg", "images/maskva.jpg", "images/taipei.jpg", "images/finish.jpg"];

var images = document.getElementById("img");

var result = 0;


var button2 = document.getElementById("button2");
var explanation = document.getElementById("explanation");
var text = document.getElementById("text");

var index = 0;
var comment = document.getElementById("comment");
var header = document.createElement('header');

var buttons = document.getElementById("buttons");
var btn1 = document.createElement("BUTTON");
var btn2 = document.createElement("BUTTON");
var btn3 = document.createElement("BUTTON");
var btn4 = document.createElement("BUTTON");
var forward = document.createElement("BUTTON");

var timer = document.createElement("timer");
var about = document.createElement("about");

// Quiz main functions

function start() {
	displayNextImage();
	button2.style.display = "none";
	explanation.style.display = "none";
}

function displayNextImage() {
	img.style.width = "100%";
	about.innerHTML = "";
	forward.style.visibility = "hidden";
	comment.style.visibility = "hidden";
	timer.style.visibility = "hidden";
	changeQuestion();

	if (index < 7) {

		images.src = varImageArray[index];

		forward.innerHTML = "TOLIAU";
		index = index + 1;

	} else if (index === 7) {

		images.src = varImageArray[index];
		forward.innerHTML = "PABAIGA";
		index = index + 1;

	} else {

		images.src = varImageArray[8];
		index = index + 1;
	}
	buttons.appendChild(header);
	if (index != 9) {
		header.innerHTML = "Kuris miestas nuotraukoje?"
	} else {
		header.innerHTML = "Jūsų rezultatas: " + result + " taškai iš 8 ";
	}
	buttons.appendChild(btn1);
	buttons.appendChild(btn2);
	buttons.appendChild(btn3);
	buttons.appendChild(btn4);

	btn1.onclick = function fun() {
		testAnswer();
		addPoints1();
	};

	btn2.onclick = function fun() {
		testAnswer();
		addPoints2();
	};

	btn3.onclick = function fun() {
		testAnswer();
		addPoints3();
	};

	btn4.onclick = function fun() {
		testAnswer();
		addPoints4();
	};
}

function changeQuestion() {
	if (index === 8) {
		for (i = 0; i < document.getElementsByTagName("BUTTON").length; i++) {
			document.getElementsByTagName("BUTTON")[i].style.display = "none";
		}
	} else {

		for (i = 0; i < document.getElementsByTagName("BUTTON").length; i++) {
			document.getElementsByTagName("BUTTON")[i].style.backgroundColor = "white";
		}

		btn1.innerHTML = quizzArr[index][0].name;
		btn2.innerHTML = quizzArr[index][1].name;
		btn3.innerHTML = quizzArr[index][2].name;
		btn4.innerHTML = quizzArr[index][3].name;
	}
}

function testAnswer() {
	text.appendChild(about);
	text.appendChild(timer);
	imageclass.appendChild(forward);

	forward.style.backgroundColor = "orange";
	forward.style.visibility = "visible";
	comment.style.visibility = "visible";
	timer.style.visibility = "visible";

	forward.onclick = function fun() {
		displayNextImage();
	};
	if (index === 1) {
		about.innerHTML = "Japonija,Tokijas, Šintoistų šventykla. Tokijo laikas: ";
	} else if (index === 2) {
		about.innerHTML = "Ispanija, Barselona, Katalonijos meno muziejus, magiškieji fontanai. Barselonos laikas: ";
		timeChange = 1;
	} else if (index === 3) {
		about.innerHTML = "Peru, Lima, inkų tvirtovės griuvėsiai. Limos laikas: ";
		timeChange = -5;
	} else if (index === 4) {
		about.innerHTML = "Jungtiniai arabų emyratai, Abu Dabis. Didžioji šventykla. Abu Dabio laikas:";
		timeChange = 4;
	} else if (index === 5) {
		about.innerHTML = "Kinija, Pekinas. Jingshan parkas, uždraustasis miestas. Pekino laikas: ";
		timeChange = 8;
	} else if (index === 6) {
		about.innerHTML = "Australija, Sidnėjus.Operos teatras. Sidnėjaus laikas:";
		timeChange = 11;
	} else if (index === 7) {
		about.innerHTML = "Rusija, Maskva, Raudonoji aikštė. Maskvos laikas: ";
		timeChange = 3;
	} else if (index === 8) {
		about.innerHTML = "Taivanas, Taipėjus. Chiang Kai-Shek parkas ir muziejus. Taipėjaus laikas: ";
		timeChange = 8;
	}

	btn1.style.backgroundColor = quizzArr[index - 1][0].color;
	btn2.style.backgroundColor = quizzArr[index - 1][1].color;
	btn3.style.backgroundColor = quizzArr[index - 1][2].color;
	btn4.style.backgroundColor = quizzArr[index - 1][3].color;

}

function addPoints1() {

	result = result + quizzArr[index - 1][0].points;
	comment.innerHTML = quizzArr[index - 1][0].check;

}

function addPoints2() {
	result = result + quizzArr[index - 1][1].points;
	comment.innerHTML = quizzArr[index - 1][1].check;
}

function addPoints3() {
	result = result + quizzArr[index - 1][2].points;
	comment.innerHTML = quizzArr[index - 1][2].check;
}

function addPoints4() {
	result = result + quizzArr[index - 1][3].points;
	comment.innerHTML = quizzArr[index - 1][3].check;
}
// Quiz part. Time display function

window.onload = worldClockZone;
var timeChange = 9;

function worldClock(zone) {

	var time = new Date()
	var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
	var gmtTime = new Date(gmtMS)


	var hr = gmtTime.getHours() + zone
	var min = gmtTime.getMinutes()
	var sec = gmtTime.getSeconds()

	if (hr >= 24) {
		hr = hr - 24

	}
	if (hr < 0) {
		hr -= -24

	}
	if (hr < 10) {
		hr = " " + hr
	}
	if (min < 10) {
		min = "0" + min
	}
	if (sec < 10) {
		sec = "0" + sec
	}

	return hr + ":" + min + ":" + sec
}

function worldClockZone() {

	timer.innerHTML = worldClock(timeChange)

	setTimeout("worldClockZone()", 1000)
}


// Webpage style and details

function onQuote() {
	document.getElementsByClassName("travelquote")[0].style.color = "green";
}

function offQuote() {
	document.getElementsByClassName("travelquote")[0].style.color = "white";
}

function input() {
	document.getElementsByClassName("email")[1].style.backgroundColor = "lightgreen";
	document.getElementsByClassName("email")[1].placeholder = "";

}

function offinput() {
	document.getElementsByClassName("email")[1].style.backgroundColor = "white";
	document.getElementsByClassName("email")[1].placeholder = "petras@keliautojas.lt";
}

function order() {
	alert("Naujienlaiškis sėkmingai užsakytas")
}