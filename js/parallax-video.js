// Grabs all of the elements that have parallax
const parallaxElements = document.querySelectorAll('[parallax]')

// Scroll Event
window.addEventListener('scroll', ()=>{
    // Grabs scroll delta y
    const y = window.scrollY;

    // Iterate over all elements
    parallaxElements.forEach((element) => {
        // Scroll element
        element.style.transform = `translateY(-${(y > element.offsetTop) ? y/5 : 0}px)`;
    });
});
