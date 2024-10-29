// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
// });

window.addEventListener("scroll", function (event) {
    const navigationBar = document.querySelector("#navbar");

    if (window.scrollY > 50) {
        navigationBar.classList.add("scrolled");
    } else {
        navigationBar.classList.remove("scrolled");
    }
});
