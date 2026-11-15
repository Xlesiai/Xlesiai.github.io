const projects = [
  {
    title: "Dynamic Analysis of WannaCry",
    type: "Cybersecurity research",
    description:
      "Co-authored peer-reviewed IEEE research. Automated Cuckoo VM analysis, combined host logs with NetFlow features, and evaluated ensemble models with up to 99% detection accuracy.",
    tags: ["Python", "Cuckoo Sandbox", "NetFlow", "Machine Learning"],
    filter: "research",
    art: "research",
    label: "Research / Cybersecurity",
    visual: "WANNACRY\nANALYSIS",
    detail: "Host telemetry + network flows",
    url: "https://ieeexplore.ieee.org/document/10849243",
    action: "Read publication",
  },
  {
    title: "Android-Ignition Sensor Gateway",
    type: "Industrial IoT / telemetry",
    description:
      "Streams Android sensor readings through MQTT into Ignition SCADA for live monitoring and historical storage in MariaDB.",
    tags: ["Kotlin", "MQTT", "Ignition SCADA", "MariaDB"],
    filter: "systems",
    art: "systems",
    label: "Systems / Industrial IoT",
    visual: "SENSOR\nGATEWAY",
    detail: "Android  /  MQTT  /  SCADA",
    url: "https://github.com/Xlesiai/Android-Ignition",
    action: "View on GitHub",
  },
  {
    title: "AI-Assisted Social Data Parser",
    type: "Data extraction / personal project",
    description:
      "An ongoing Python tool for Xiaohongshu blind-box posts: translate and normalize text, extract useful product clues, and shape results into validated JSON.",
    tags: ["Python", "Ollama / Mistral", "Pydantic", "Translation"],
    filter: "data",
    art: "data",
    label: "Data / AI-assisted extraction",
    visual: "RAW TEXT\nTO SIGNAL",
    detail: "Parse  /  normalize  /  structure",
    url: "https://github.com/Xlesiai/Blindbox-Helper",
    action: "View on GitHub",
  },
  {
    title: "Nexa Book Recommender",
    type: "Android / mobile",
    description:
      "A Kotlin Android app that fetches and caches book metadata from Open Library, then combines API results with a user's local library for recommendations.",
    tags: ["Kotlin", "Android", "REST API", "Open Library"],
    filter: "mobile",
    art: "mobile",
    label: "Mobile / recommendations",
    visual: "BOOKS\nIN CONTEXT",
    detail: "Open Library + personal library",
    url: "https://github.com/AND101-Group30/Nexa-Book-Recommender",
    action: "View on GitHub",
  },
];

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.category = project.filter;

  const artwork = document.createElement("div");
  artwork.className = `project-art project-art--${project.art}`;

  const artTop = document.createElement("div");
  artTop.className = "art-top";
  artTop.append(
    createTextElement("span", "art-label", project.label),
    createTextElement("span", "art-index", String(index + 1).padStart(2, "0")),
  );

  const artTitle = createTextElement("strong", "art-title", project.visual);
  const artBottom = document.createElement("div");
  artBottom.className = "art-bottom";
  artBottom.append(createTextElement("span", "", project.detail));
  artwork.append(artTop, artTitle, artBottom);

  const content = document.createElement("div");
  content.className = "project-content";
  content.append(
    createTextElement("p", "project-type", project.type),
    createTextElement("h3", "", project.title),
    createTextElement("p", "", project.description),
  );

  const tags = document.createElement("div");
  tags.className = "project-tags";
  tags.setAttribute("aria-label", "Technologies");
  project.tags.forEach((tag) => tags.append(createTextElement("span", "project-tag", tag)));

  const link = createTextElement("a", "project-link", "");
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${project.action}: ${project.title}`);
  link.append(document.createTextNode(project.action + " "));
  link.append(createTextElement("span", "", "↗"));
  link.lastElementChild.setAttribute("aria-hidden", "true");

  content.append(tags, link);
  card.append(artwork, content);
  return card;
}

function initializeProjects() {
  const projectGrid = document.getElementById("projectList");
  const filterButtons = document.querySelectorAll(".filter-button");

  projects.forEach((project, index) => {
    projectGrid.append(createProjectCard(project, index));
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      projectGrid.querySelectorAll(".project-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
}

function initializeNavigation() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    links.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    links.classList.toggle("is-open", isOpen);
  });

  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initializeTheme() {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-icon");

  toggle.addEventListener("click", () => {
    const lightTheme = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = lightTheme ? "light" : "dark";
    toggle.setAttribute("aria-pressed", String(lightTheme));
    toggle.setAttribute("aria-label", lightTheme ? "Switch to dark theme" : "Switch to light theme");
    icon.textContent = lightTheme ? "☾" : "☼";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeProjects();
  initializeNavigation();
  initializeTheme();
  document.getElementById("currentYear").textContent = String(new Date().getFullYear());
});
