
let ShareSec = document.querySelector(".share");
let PersonSec = document.querySelector(".person");
let ShareEl = document.getElementById("share-btn");
let CloseEl = document.getElementById("close-share");

ShareEl.addEventListener("click", function () {
    if (window.matchMedia("(min-width: 47em)").matches && ShareSec.style.display === "flex") {
        ShareSec.style.display = "none";
    }
    else if (!window.matchMedia("(min-width: 47em)").matches) {
        PersonSec.style.display = "none";
        ShareSec.style.display = "flex";
    }
    else {
        ShareSec.style.display = "flex"
    }
});

CloseEl.addEventListener("click", function () {
    PersonSec.style.display = "flex";
    ShareSec.style.display = "none";
});