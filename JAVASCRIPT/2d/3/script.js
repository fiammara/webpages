var randomNumber = Math.floor((Math.random() * 10) + 1);

function myFunction1() {

	var guess = document.getElementById("sk").value;

	if (randomNumber > guess) {
		document.getElementById("result").innerHTML = "my number is higher";
	} else if (randomNumber < guess) {
		document.getElementById("result").innerHTML = "my number is smaller";
	} else if (randomNumber == guess) {
		document.getElementById("result").innerHTML = "You win! ";
	}

}
