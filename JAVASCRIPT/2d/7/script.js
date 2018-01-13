function myFunction() {

	var inpfields = document.getElementsByTagName('input');
	var labels = document.getElementsByTagName('label');


	for (var i = 0; i < inpfields.length; i++) {
		if (inpfields[i].type == 'radio' && inpfields[i].checked == true) {

			var x = document.createElement("LI");
			var t = document.createTextNode(labels[i].innerHTML);

			x.appendChild(t);

			document.getElementById("list").appendChild(x);

		}

	}

}
