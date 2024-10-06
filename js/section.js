sections = document.querySelectorAll("section");
scrollTop = window.scrollY;

// Loop through all the sections
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  if (section.offsetTop - 200 <= scrollTop) {
    section.classList.add("active");
  } else {
    section.classList.remove("active");
  }
}
