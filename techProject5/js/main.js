//add an event listener to watch key ups on the search input 
document.querySelector("#search").addEventListener("keyup", function () {
    
//store the search value in a variable and set it to lower case
const input = document.querySelector("#search").value.toLowerCase();
      
//store photo elements in array 
const photos = document.querySelectorAll(".list a");
//loop over each photo 
for (let i = 0; i < photos.length; i++){
//store the caption of a the photo at an array index and make it lowercase 
const caption = photos[i].getAttribute("data-title").toLowerCase();
//if the search term is in the caption
if (caption.includes(input)) {
//show the image
$(photos[i]).show();
} 
//otherwise hide them 
else {
  $(photos[i]).hide();
}
}
});