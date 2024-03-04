/*
Ideo:
- grab elements that arent in the top
  - scroll elements up
  - if element is at top 

*/

const sections = document.querySelectorAll("[parallax-section]");
console.log(sections);
const test = document.getElementById("test");
const limit = 20;
let currentSectionIndex = 0;
var lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const direction = scrollY > lastScrollY ? "down" : "up";
  let stickyIndex;

  test.innerHTML = direction;
  lastScrollY = scrollY;

  // Determine which section is currently at the top
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    if (rect.top > 0 && rect.bottom <= window.innerHeight) {
      stickyIndex = i;
      break; // Exit the loop once the condition is met
    }
  }

  // Apply sticky behavior
  if (direction === "down") {
    for (let i = 0; i <= stickyIndex; i++) {
      sections[i].classList.add("sticky");
    }
    for (let i = stickyIndex + 1; i < sections.length; i++) {
      sections[i].classList.remove("sticky");
    }
  } else {
    for (let i = sections.length - 1; i >= stickyIndex; i--) {
      sections[i].classList.remove("sticky");
    }
    for (let i = stickyIndex - 1; i >= 0; i--) {
      sections[i].classList.add("sticky");
    }
  }
});
