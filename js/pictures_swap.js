function image_swap(id) {
	element = document.getElementById(id);
	if (element.src.match("1")) {
		element.src="images/2.jpg";
	}
	else if (element.src.match("2")) { 
		element.src="images/3.jpg";
	}	
    else if (element.src.match("3")) {
		element.src="images/1.jpg";
	}
}
