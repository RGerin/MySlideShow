/**
 * @author Roseanne
 */


/*This is an array of the photos. I originally had "var images" here, but realized I should
 have had "var Photos" instead because Photos is the name of the folder where the photos are located.*/
var Photos = ["Chrysanthemum.jpg", "Desert.jpg", "Hydrangeas.jpg", "Jellyfish.jpg", "Koala.jpg",
 "Lighthouse.jpg", "Penguins.jpg", "Tulips.jpg"];
 
/* Index of the current photos in the array */
var index=0;

/*I am setting button events here with "setNav".*/
function setNav() {
	
/*".button" will select anyting with a class of button in it.*/	
	$(".button").on("click", function() {
/*This is where something happens when ".button" elements are clicked.*/		
	
	var buttonName = $(this).attr("ref");	
	
/*Next, I'll add if/else statments to tell the computer to go to the next 
 * photo in my "Photos" folder. I originally has "images.length" but
 * realized his was incorrect and changed it to "Photos.length" because 
 * that is the name of the folder where the photos are located.*/	
 	
		var isNext = ($(this).hasClass("next"));
		if (isNext == true && index != (Photos.length-1)) {
			index = index + 1;
		} else if (index = 0 ) {
			index = index - 1;
		}
				
/*I changed "images.length" here to "Photos.length" because that is the name of the
 * folder where the photos are located.*/		
	if (index == 0) {
		$(".button.prev").addClass("disabled");
	} else if (index== (Photos.length-1)) {	
		$(".button.next").addClass("disabled");
	} else {
		$(".button").removeClass("disabled");
	}	
/*I erroneously had "updateimages" here but changed it to "updatePhotos".
 
 * One thing I don't understand: No matter which photo you are on in the slide,
 * if you hit the PREV button, it always takes you back to the very first photo 
 * of the orange chrysanthemum and not to the photo immediate before it. Why?*/		
	updatePhotos();		
	});
	
}

/* This function will change the photos in the slide show. I erroneously had "updateimage"
 instead of updatePhotos here.*/
function updatePhotos() {
	$(".image-holder").html(
		"<img src='Photos/"+Photos[index]+"'/>"
	);
}

/* This get command will load the first photo from the Photos folder into the image holder.*/
$(document).ready(function() {
	$(".image-holder").html(
		"<img src='Photos/"+Photos[index]+"'/>"
	);	
	
	
	$(".button.prev").addClass("disabled");
	
	setNav();
});

console.log("Photos")


