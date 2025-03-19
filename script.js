// Load moods when page loads
document.addEventListener("DOMContentLoaded", loadMoods);

function saveMood() {
  const moodSelect = document.getElementById("mood-select");
  const selectedMood = moodSelect.value;
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Get existing moods from LocalStorage
  let moods = JSON.parse(localStorage.getItem("moods")) || {};

  // Save new mood for today
  moods[today] = selectedMood;
  localStorage.setItem("moods", JSON.stringify(moods));

  loadMoods(); // Refresh mood list
}

// Load moods from LocalStorage
function loadMoods() {
  const moodList = document.getElementById("mood-list");
  moodList.innerHTML = ""; // Clear existing list

  let moods = JSON.parse(localStorage.getItem("moods")) || {};

  // Display stored moods
  for (let date in moods) {
    const li = document.createElement("li");
    li.textContent = `${date}: ${moods[date]}`;
    moodList.appendChild(li);
  }
}
