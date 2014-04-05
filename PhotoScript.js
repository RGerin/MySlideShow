/**
 * @author Roseanne
 */


/*This is an array of the photos.*/
var images = ["Chrysanthemum.jpg", "Desert.jpg", "Hydrangeas.jpg", "Jellyfish.jpg", "Koala.jpg",
 "Lighthouse.jpg", "Penguins.jpg", "Tulips.jpg"];
 

/* Index of the current photos in the array */
var index=0;

/*I am setting button events here with "setNav".*/
function setNav() {
	console.log("setNav");
/*".button" will select anyting with a class of button in it.*/	
	$(".button").on("click", function() {
/*This is where somthing happens when ".button" elements are clicked.*/		
		console.log("click");

/*Next, I'll add if/else statments to tell the computer to go tot eh next photo
 * for var ".hasClass" then "next".
 */		
		var isNext = $(this).hasClass("next");
		if (isNext == true && index != (images.length-1)) {
			index = index + 1;
		} else if (index = 0 ) {
			index = index - 1;
		}
		
		
	if (index == 0) {
		$(".button.prev").addClass("disabled");
	} else if (index== (images.length-1)) {	
		$(".button.next").addClass("disabled");
	} else {
		$(".button").removeClass("disabled");
	}	
	
	updateImage();		
	});
	
	
}

/* This function will change the photos.*/
function updateImage() {
	console.log(images[index]);
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
}

/* This comment loads the first image into the image holder */
$(document).ready(function() {
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);	
	
	
	$(".button.prev").addClass("disabled");
	
	setNav();
});

console.log(images)


