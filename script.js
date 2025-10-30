// Handles loading the events for <model-viewer>'s slotted progress bar

document.querySelector("model-viewer").addEventListener("progress", (event) => {
  const progressBar = event.target.querySelector(".progress-bar");
  const updatingBar = event.target.querySelector(".update-bar");
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add("hide");
    event.target.removeEventListener("progress", onProgress);
  } else {
    progressBar.classList.remove("hide");
  }
});

// handles error

modelViewer.addEventListener("error", (event) => {
  const errorMessage = document.querySelector("#error-message");
  const modelViewer = document.querySelector("model-viewer");

  console.error("Model loading error:", event.detail);
  errorMessage.style.display = "block";

  // You can also hide the model viewer
  modelViewer.style.display = "none";
});
