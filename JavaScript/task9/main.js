const loading = document.querySelector("#loading");
const eventList = document.querySelector("#eventList");

fetch("events.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (events) {
    console.log("Loaded with then/catch:", events);
  })
  .catch(function (error) {
    console.log("Fetch error:", error);
  });

async function loadEvents() {
  try {
    loading.style.display = "block";
    const response = await fetch("events.json");
    const events = await response.json();

    eventList.innerHTML = events.map(function (eventItem) {
      return `<p>${eventItem.name} - ${eventItem.category} - Seats: ${eventItem.seats}</p>`;
    }).join("");
  } catch (error) {
    eventList.textContent = "Unable to load events.";
  } finally {
    loading.style.display = "none";
  }
}

loadEvents();
