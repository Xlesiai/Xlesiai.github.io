// When project button is clicked, toggle 'clicked' class
function onClick(button) {
  projectList.innerHTML = "";
  button.classList.toggle("clicked");
  clickedButton = document.getElementsByClassName("clicked");
  for (var i = 0; i < clickedButton.length; i++) {
    populateProjects(clickedButton[i].innerHTML);
  }
}

function toggleTheme(button) {
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("clicked_theme");
  if (button.classList.contains("clicked_theme")) {
    button.innerHTML = "🌞";
  } else {
    button.innerHTML = "🌙";
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

// Projects
projects = {
  "Full-Stack": {
    "Project 1": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 2": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 3": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
  },
  "Game Dev": {
    "Project 1": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 2": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 3": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
  },
  "Artificial Intelligence": {
    "Project 1": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 2": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
    "Project 3": {
      img: "https://placehold.co/150",
      link: "www.google.com",
    },
  },
};

const projectList = document.getElementById("projectList");
const title = document.getElementById("projects_title");
