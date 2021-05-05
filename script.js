var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector('.button');


function setGradient(a,b) {
var a= color1.value;
var b = color2.value;
	body.style.background =
	"linear-gradient(to right, "
	+ a
	+ ", "
	+ b
	+ ")";

	css.textContent = body.style.background + ";";
}

function clickA(colorA, colorB){

var colorA = '#'+ Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');;
var colorB = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
body.style.background =
"linear-gradient(to right, "
+ colorA
+ ", "
+ colorB
+ ")";

css.textContent = body.style.background + ";";


}


random.addEventListener('click', clickA);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
