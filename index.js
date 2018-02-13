
var zoomwidth = 100;
var zoomheight = 70;
var counter = 0;

document.getElementById("BG1").addEventListener("click", function () {
		ch1.style.backgroundImage  = "url('imgs/i1.jpg')";
		ch2.style.backgroundImage  = "url('imgs/i2.jpg')";
		ch3.style.backgroundImage  = "url('imgs/i3.jpg')";
		counter = 1;
		
	});
	

document.getElementById("BG2").addEventListener("click", function () {
		ch1.style.backgroundImage  = "url('imgs/i4.jpg')";
		ch2.style.backgroundImage  = "url('imgs/i5.jpg')";
		ch3.style.backgroundImage  = "url('imgs/i6.jpg')";
		counter = 2;
		
	});
	

document.getElementById("BG3").addEventListener("click", function () {
		ch1.style.backgroundImage  = "url('imgs/i7.jpg')";
		ch2.style.backgroundImage  = "url('imgs/i8.jpg')";
		ch3.style.backgroundImage  = "url('imgs/i9.jpg')";
		counter = 3;
		
	});
	

document.getElementById("BG4").addEventListener("click", function () {
		ch1.style.backgroundImage  = "url('imgs/i10.jpg')";
		ch2.style.backgroundImage  = "url('imgs/i11.jpg')";
		ch3.style.backgroundImage  = "url('imgs/i12.jpg')";
		
		counter = 0
		
	});
	

	
	
document.getElementById("ch1").addEventListener("mouseenter", function () {
		zoom.style.backgroundImage  = document.getElementById("ch1").style.backgroundImage;
		
		
	});
	
	
document.getElementById("ch2").addEventListener("mouseenter", function () {
		zoom.style.backgroundImage  = document.getElementById("ch2").style.backgroundImage;
		
		
	});
	
document.getElementById("ch3").addEventListener("mouseenter", function () {
		zoom.style.backgroundImage  = document.getElementById("ch3").style.backgroundImage;
		
		
	});
	

document.getElementById("zoom").addEventListener("click", function () {
		zoomout.style.display = "inline-block";
		zoomin.style.display = "inline-block";
		
		
	});
	

document.getElementById("zoomin").addEventListener("click", function () {
		zoomwidth = zoomwidth + 10
		zoomheight = zoomheight + 7
		document.getElementById("zoom").style.width = zoomwidth + "%";
		document.getElementById("zoom").style.height = zoomheight + "%";
		
	});
	
document.getElementById("zoomout").addEventListener("click", function () {
		zoomwidth = zoomwidth - 10
		zoomheight = zoomheight - 7
		document.getElementById("zoom").style.width = zoomwidth + "%";
		document.getElementById("zoom").style.height = zoomheight + "%";
		
		
	});
	

document.getElementById("next").addEventListener("click", function () {
		if (counter == 0) {
			ch1.style.backgroundImage = "url('imgs/i1.jpg')";
			ch2.style.backgroundImage = "url('imgs/i2.jpg')";
			ch3.style.backgroundImage = "url('imgs/i3.jpg')";
			counter = counter + 1;
			
			
		}
		
		else if (counter == 1) {
			ch1.style.backgroundImage = "url('imgs/i4.jpg')";
			ch2.style.backgroundImage = "url('imgs/i5.jpg')";
			ch3.style.backgroundImage = "url('imgs/i6.jpg')";
			counter = counter + 1;
		
		
		}
		
		else if (counter == 2) {
			ch1.style.backgroundImage = "url('imgs/i7.jpg')";
			ch2.style.backgroundImage = "url('imgs/i8.jpg')";
			ch3.style.backgroundImage = "url('imgs/i9.jpg')";
			counter = counter + 1;
		
		
		}
		
		else if (counter == 3) {
			ch1.style.backgroundImage = "url('imgs/i10.jpg')";
			ch2.style.backgroundImage = "url('imgs/i11.jpg')";
			ch3.style.backgroundImage = "url('imgs/i12.jpg')";
			counter = 0;
		
		
		}
		
		
		
	});
	
document.getElementById("previous").addEventListener("click", function () {
		if (counter == 0) {
			ch1.style.backgroundImage = "url('imgs/i1.jpg')";
			ch2.style.backgroundImage = "url('imgs/i2.jpg')";
			ch3.style.backgroundImage = "url('imgs/i3.jpg')";
			counter = 3;
			
			
		}
		
		else if (counter == 1) {
			ch1.style.backgroundImage = "url('imgs/i4.jpg')";
			ch2.style.backgroundImage = "url('imgs/i5.jpg')";
			ch3.style.backgroundImage = "url('imgs/i6.jpg')";
			counter = counter - 1;
		
		
		}
		
		else if (counter == 2) {
			ch1.style.backgroundImage = "url('imgs/i7.jpg')";
			ch2.style.backgroundImage = "url('imgs/i8.jpg')";
			ch3.style.backgroundImage = "url('imgs/i9.jpg')";
			counter = counter - 1;
		
		
		}
		
		else if (counter == 3) {
			ch1.style.backgroundImage = "url('imgs/i10.jpg')";
			ch2.style.backgroundImage = "url('imgs/i11.jpg')";
			ch3.style.backgroundImage = "url('imgs/i12.jpg')";
			counter = counter - 1;
		
		
		}
		
		
		
	});
	
	
/* document.getElementById("previous").addEventListener("click", function () {
		if (counter == 0) {
			ch1.style.backgroundImage = "url('imgs/i10.jpg')";
			ch2.style.backgroundImage = "url('imgs/i11.jpg')";
			ch3.style.backgroundImage = "url('imgs/i12.jpg')";
			counter = counter = 2;
			
		}
		
		else if (counter == 1) {
			ch1.style.backgroundImage = "url('imgs/i1.jpg')";
			ch2.style.backgroundImage = "url('imgs/i2.jpg')";
			ch3.style.backgroundImage = "url('imgs/i3.jpg')";
			counter = counter - 1;
		
		
		}
		
		else if (counter == 2) {
			ch1.style.backgroundImage = "url('imgs/i4.jpg')";
			ch2.style.backgroundImage = "url('imgs/i5.jpg')";
			ch3.style.backgroundImage = "url('imgs/i6.jpg')";
			counter = counter - 1;
		
		
		}
		
		
	}); */
	
