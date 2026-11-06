const destination =
  "https://kerndesignstudio.github.io/learning-room-platform/" +
  (window.location.hash || "#/");
document.querySelector("#continue").href = destination;
window.location.replace(destination);
