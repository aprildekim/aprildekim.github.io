var d, s, sheight;
function adjustWaterLevel() {
	d = new Date();
	s = d.getSeconds();
	sheight = s * 1.57;
	waterLevel.style.transform = "scale("+sheight+"%)";
}

window.addEventListener("load", function(){
	setInterval( adjustWaterLevel, 1000);
} );