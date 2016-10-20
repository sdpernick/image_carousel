// set up variables (imagesArray and imageIndex)

var images=["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg",
"images/food6.jpg","images/food7.jpg"];

var imgIndex = 0;

// create a function to find the prev image
// if prev index is greater than 0 than it's valid else set to last image in array
function prevImage(){
   if (imgIndex > images.length) {
   	imgIndex--;
}  else {
    imgIndex = 6;
}
   


// create a function to find the next image
// if next index is less than the length than it's valid else set to first image in array
function nextImage(){
   if (imgIndex < images.length) {
   imgIndex++;
} else {
	imgIndex = 0;
}

   $("#main-image").attr("src", images[imgIndex]);
   // console.log(images[imgIndex]);
}

// on click next or prev find the next or prev image (using the functions created)
$(".next").on("click",nextImage);
$(".prev").on("click",prevImage);