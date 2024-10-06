// Function to create a project element
function createProject(title, imageUrl) {
  // Create the div element for the project
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  // Create the image element
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  // Create the title element
  const titleElement = document.createElement("div");
  titleElement.classList.add("project-title");
  titleElement.textContent = title;

  // Append image and title to the project div
  projectDiv.appendChild(img);
  projectDiv.appendChild(titleElement);

  // Append the project div to the container
  document.getElementById("projects-container").appendChild(projectDiv);
}

// Example of adding multiple projects
createProject("Project 1", "https://via.placeholder.com/100");
createProject("Project 2", "https://via.placeholder.com/100");
createProject("Project 3", "https://via.placeholder.com/100");
