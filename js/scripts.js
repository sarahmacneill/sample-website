// "listens" for when the window is scrolled on. When a scroll happens, function is executed
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        document.getElementById('go-top-button').style.display = "unset";
    } else {
        document.getElementById('go-top-button').style.display = "none";
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo(0,0);
}
