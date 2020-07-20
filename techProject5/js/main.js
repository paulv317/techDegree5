let captions = [];

$(".image-grid > a").each(function(i) {
  captions[i] = $(this).attr("data-title");
});

document.getElementById("search").addEventListener('keyup', myFunction);

function myFunction() {
    var x = document.getElementById("search");
    x.value = x.value.toLowerCase();
}

var caption = document.getElementsByTagName("a")[0].getAttribute("data-title").toLowerCase();

