var css = document.querySelector("h3");
var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var body = document.getElementsByTagName("body")[0];
changeBackground()
var rndBtn= document.getElementById("rndBtn");


function changeBackground(){
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value+")";
	css.textContent = body.style.background + ";";
}

function randomColor(){
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

rndBtn.addEventListener("click", function(){
	color1.value = randomColor();
	color2.value = randomColor();
	changeBackground()
})

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);