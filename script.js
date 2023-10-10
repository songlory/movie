document.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll(".parallax-image");

    parallaxElements.forEach(function(element) {
        const speed = parseFloat(element.getAttribute("data-speed"));
        element.style.transform = `translateY(-${scrollY * speed}px)`;
    });
});