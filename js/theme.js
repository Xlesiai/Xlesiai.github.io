function toggleTheme(button) {
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("clicked_theme");
  if (button.classList.contains("clicked_theme")) {
    button.innerHTML = "🌞";
  } else {
    button.innerHTML = "🌙";
  }
}
