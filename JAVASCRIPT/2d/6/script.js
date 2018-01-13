var array = [];

function myFunction() {

	var inpfields = document.getElementsByTagName('input');
	var labels = document.getElementsByTagName('label');


	for (var i = 0; i < inpfields.length; i++) {
		if (inpfields[i].type == 'checkbox' && inpfields[i].checked == true && array.includes(inpfields[i].value) == false) {
			labels[i].className = "lbl1";
			inpfields[i].checked = false;
			var x = document.createElement("LI");
			var t = document.createTextNode(inpfields[i].value);

			x.appendChild(t);

			document.getElementById("list").appendChild(x);

			array.push(inpfields[i].value);

		}

	}

}
