// Enhanced projects data structure
const projects = {
  all: {
    "WannaCry Analysis": {
      img: "https://placehold.co/400x300/112240/ffffff?text=WannaCry+Analysis",
      link: "https://ieeexplore.ieee.org/document/10849243",
      category: ["paper", "software", "Python"],
      description:
        "Cybersecurity research analyzing the WannaCry ransomware with the use of AI",
    },
    "Outfit of the Day": {
      img: "https://placehold.co/400x300/112240/ffffff?text=Outfit+of+the+Day",
      link: "#",
      category: ["software", "android"],
      description:
        "My senior project: an IOS app for clothing classification and recommendation",
    },
    "Android Ignition": {
      img: "https://placehold.co/400x300/112240/ffffff?text=Android+Ignition",
      link: "#",
      category: ["software", "android"],
      description: "Using SCADA Ignition and Android to monitor device sensors",
    },
    "AI Blindbox Helper": {
      img: "https://placehold.co/400x300/112240/ffffff?text=AI+Blindbox+Helper",
      link: "#",
      category: ["software", "Python"],
      description: "Using AI to help players in finding Blindboxs",
    },
    "The Heart of the Museum": {
      img: "https://img.itch.zone/aW1nLzExNDM4MTk0LnBuZw==/original/xtj0H5.png",
      link: "Game-Dev/The-Heart-of-the-Museum.html",
      category: ["game-dev", "Unity"],
      description: "A puzzle adventure game set in a mysterious museum",
    },
    Hexadoku: {
      img: "https://placehold.co/400x300/112240/ffffff?text=Hexadoku",
      link: "Game-Dev/Hexadoku.html",
      category: ["game-dev", "Godot"],
      description: "A hexagonal twist on the classic Sudoku puzzle game",
    },
    BOTA: {
      img: "https://placehold.co/400x300/112240/ffffff?text=BOTA",
      link: "Game-Dev/BOTA.html",
      category: ["game-dev", "Unreal"],
      description: "My FPS wizard battle game that im still working on",
    },
    "Twisted Insanity": {
      img: "https://img.itch.zone/aW1nLzE1MjgxNzg0LnBuZw==/347x500/OEdgA8.png",
      link: "Game-Dev/Twisted-Insanity.html",
      category: ["game-dev", "Unreal"],
      description: "Psychological horror game with puzzle elements",
    },
    "Where's My Stuff": {
      img: "https://img.itch.zone/aW1nLzE5Nzg2MjMyLnBuZw==/347x500/QMB1d6.png",
      link: "Game-Dev/Where's-My-Stuff.html",
      category: ["game-dev", "Unreal"],
      description: "Organizational app with gamification elements",
    },
    "Nexa Book Recommender": {
      img: "https://placehold.co/400x300/112240/ffffff?text=Nexa+Book+Recommender",
      link: "https://github.com/AND101-Group30/Nexa-Book-Recommender",
      category: ["android"],
      description:
        "A project I made while in CodePath's Android App Development Bootcamp",
    },
  },
};

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Initialize projects
  populateProjects("all");

  // Initialize filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      populateProjects(button.dataset.filter);
    });
  });

  // Initialize skill bars animation
  initSkillBars();

  // Initialize navigation
  initNavigation();
});

// Enhanced project population function
function populateProjects(category) {
  const projectGrid = document.getElementById("projectList");
  projectGrid.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const key in projects.all) {
    const project = projects.all[key];

    if (category === "all" || project.category.includes(category)) {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `
              <div class="project-image">
                <img src="${project.img}" alt="${key}">
                <div class="project-overlay">
                  <div class="project-actions">
                    <a href="${
                      project.link
                    }" class="project-link">View Project</a>
                  </div>
                </div>
              </div>
              <div class="project-info">
                <h3>${key}</h3>
                <p>${project.description}</p>
                ${project.category.map(filterCards).join("")}
              </div>
            `;
      fragment.appendChild(projectCard);
    }
  }

  projectGrid.appendChild(fragment);
}

// Initialize skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

// Initialize navigation
function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function filterCards(elm) {
  return `<span class="project-category">${elm}</span>`;
}
function toggleTheme(button) {
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("clicked_theme");
  if (button.classList.contains("clicked_theme")) {
    button.innerHTML = "☀️";
  } else {
    button.innerHTML = "🌙";
  }
}
