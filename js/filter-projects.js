function filterProjectList(filter) {
  if (filter == "software") {
    const projectList = document
      .getElementById("projects")
      .getElementsByClassName("software-project");
    const box = document.getElementById("software");
    const clicked = box.checked;
    for (i = 0; i < projectList.length; i++) {
      if (clicked) {
        projectList[i].style.display = "";
      } else {
        projectList[i].style.display = "none";
      }
    }
  }

  if (filter == "game") {
    const projectList = document
      .getElementById("projects")
      .getElementsByClassName("game-project");
    const box = document.getElementById("game");
    const clicked = box.checked;
    for (i = 0; i < projectList.length; i++) {
      if (clicked) {
        projectList[i].style.display = "";
      } else {
        projectList[i].style.display = "none";
      }
    }
  }
}
