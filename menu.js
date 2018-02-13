document.getElementById("buttonsopen").addEventListener("click", function () {
		menu.style.left = 0 + "px";
		
	});
	
	
document.getElementById("buttonsclose").addEventListener("click", function () {
		menu.style.left = -110 + "px";
		
	});
	

document.getElementById("bgbutton").addEventListener("click", function () {
		bg.style.backgroundImage  = document.getElementById("zoom").style.backgroundImage;
		
	});
	

document.getElementById("resetbutton").addEventListener("click", function () {
		bg.style.backgroundImage  = "none";
		
	});
	
document.getElementById("showbutton").addEventListener("click", function () {
		app1.style.display  = "block";
		
	});
	

document.getElementById("hidebutton").addEventListener("click", function () {
		app1.style.display  = "none";
		
	});