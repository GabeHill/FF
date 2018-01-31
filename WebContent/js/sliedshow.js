var image = document.getElementById("image");

var imgArray = ["img01.jpg", "img02.jpg", "img03.jpg"];

var i = 0;

function changeImage() {
    image.setAttribute("src", ("../images/" + imgArray[i]));
    i++;
    if (i >= imgArray.length) {
        i = 0;
    }
}

window.onload = function() {
    setInterval(changeImage, 2000);
}
