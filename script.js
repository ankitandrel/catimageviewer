const image = document.querySelector(".image");
const button = document.querySelector(".btn-change");
const playButton = document.querySelector(".btn-play");
const stopButton = document.querySelector(".btn-stop");
button.addEventListener("click", changeImage);
function changeImage() {
   fetchImage();
}
 
playButton.addEventListener("click",() => {
    var interval = setInterval(fetchImage,2000);
    stopButton.addEventListener("click", () => {
        window.clearInterval(interval)
    })
  
});



function fetchImage() {
    fetch("https://api.thecatapi.com/v1/images/search?size=small")
        .then((response) => {
            return response.json();
        })
        .then((imageLink) => {
            let url = imageLink[0]["url"];
            image.src = url
        })
        .catch();
}