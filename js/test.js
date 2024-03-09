import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";

var sections = document.querySelectorAll("section");

/**
 * Section Scroller
 */
let sectionScroller = ScrollTrigger.create({
  trigger: "section:first-of-type",
  scroller: "body",
  start: "top top",
  endTrigger: "section:last-of-type",
  end: "bottom bottom",
  invalidateOnRefresh: true,
  scrub: 0.25,
  snap: {
    snapTo: 1 / (sections.length - 1),
    // directional: false,
    duration: { min: 0.25, max: 0.75 }, // the snap animation should be at least 0.25 seconds, but no more than 0.75 seconds (determined by velocity)
    delay: 0.125, // wait 0.125 seconds from the last scroll event before doing the snapping
    // delay: 0,
    ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  },
});
