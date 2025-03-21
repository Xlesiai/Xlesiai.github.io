// When project button is clicked, toggle 'clicked' class
function onClick(button) {
  projectList.innerHTML = "";
  button.classList.toggle("clicked");
  clickedButton = document.getElementsByClassName("clicked");
  for (var i = 0; i < clickedButton.length; i++) {
    populateProjects(clickedButton[i].innerHTML);
  }
}

// Function to populate projects and loop them
function populateProjects(category) {
  const fragment = document.createDocumentFragment();

  for (const key in projects[category]) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${projects[category][key]["link"]}" target="_blank">
                        <img src="${projects[category][key]["img"]}" alt="${key}">
                      </a>`;
    fragment.appendChild(item);
  }
  projectList.appendChild(fragment);
}

const imgSize = 150;
// Projects
projects = {
  "Full-Stack": {
    WannaCry: {
      img: "https://placehold.co/" + imgSize,
      link: "www.google.com",
    },
    "Outfit of the Day": {
      img: "https://placehold.co/" + imgSize,
      link: "www.google.com",
    },
    "Project 3": {
      img: "https://placehold.co/" + imgSize,
      link: "www.google.com",
    },
  },
  "Game Dev": {
    "The Heart of the Museum": {
      img: "https://img.itch.zone/aW1nLzExNDM4MTk0LnBuZw==/original/xtj0H5.png",
      link: "Game-Dev/The-Heart-of-the-Museum.html",
    },
    "Project 2": {
      img: "https://placehold.co/" + imgSize,
      link: "www.google.com",
    },
    "Project 3": {
      img: "https://placehold.co/" + imgSize,
      link: "www.google.com",
    },
  },
};

const projectList = document.getElementById("projectList");
const title = document.getElementById("projects_title");

setTimeout(() => {
  const clickedButtons = document.getElementsByClassName("project-button");
  for (var i = 0; i <= clickedButtons.length; i++) {
    onClick(clickedButtons[i]);
  }
}, 1000);
