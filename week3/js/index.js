document.getElementById('fahrenheitButton') .onclick = fClick;
document.getElementById('celsiusButton') .onclick = cClick;
document.getElementById('reset').onclick = reset;

function fClick(){

	var x = parseInt (document.getElementById('temperature').value);
	var y = (x-32) * 5 / 9;
	document.getElementById('solution').value = Math.round(y) + "ºC";
	if (y >= 21) {
	document.body.style.backgroundColor = "#F03C02";
	} else if (y <21) {
	document.body.style.backgroundColor = "#2F84A9";
	} else{
		reset();
		alert("must enter a number");
	}
 }

function cClick(){
	var x = parseInt (document.getElementById('temperature').value);
	var z = x * 9 / 5 + 32;
	document.getElementById('solution').value = Math.round(z) + "ºF";
	if (z > 69) {
	document.body.style.backgroundColor = "#F03C02";
	} else if (z <70) {
		document.body.style.backgroundColor = "#2F84A9";
	} else {
		reset();
		alert("must use a number");
	}

}

function reset(){
	document.body.style.backgroundColor = "white";
	document.getElementById('temperature').value = "";
	document.getElementById('solution').value = "";
}