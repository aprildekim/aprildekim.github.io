//Set the target date & time
var countUpDate = new Date ("May 2, 2019 12:44:00").getTime();

//Get today's date & time
var now = new Date().getTime();

//Find the distance between now and the target date & time
var distance = countUpDate - now {
	document.getElementById("waterLevel").setAttribute("style", "height: 100%");
}

//Display the result in an element with id="waterLevel"

/**
var d, s, sheight;
function adjustWaterLevel() {
	d = new Date();
	s = d.getSeconds();
	sheight = s * 1.57;
	waterLevel.style.transform = "scale("+sheight+"%)";
}

window.addEventListener("load", function(){
	setInterval( adjustWaterLevel, 1000);
} );**/