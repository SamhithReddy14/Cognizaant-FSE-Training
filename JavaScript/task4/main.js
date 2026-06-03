const events = [];
const output = document.querySelector("#output");

function addEvent(name, category, seats) {
  events.push({ name, category, seats });
}

function registerUser(eventName) {
  const eventItem = events.find(function (eventData) {
    return eventData.name === eventName;
  });

  if (eventItem && eventItem.seats > 0) {
    eventItem.seats--;
    return true;
  }
  return false;
}

function createCategoryRegistrationTracker(category) {
  let totalRegistrations = 0;

  return function () {
    totalRegistrations++;
    return `${category} registrations: ${totalRegistrations}`;
  };
}

function filterEventsByCategory(category, callback) {
  const result = events.filter(function (eventItem) {
    return eventItem.category.toLowerCase() === category.toLowerCase();
  });
  callback(result);
}

function displayEvents(filteredEvents) {
  output.innerHTML = filteredEvents.map(function (eventItem) {
    return `<p>${eventItem.name} - ${eventItem.category} - Seats: ${eventItem.seats}</p>`;
  }).join("");
}

addEvent("Music Night", "Music", 5);
addEvent("Baking Workshop", "Workshop", 3);
addEvent("Jazz Evening", "Music", 4);

const trackMusic = createCategoryRegistrationTracker("Music");
registerUser("Music Night");
console.log(trackMusic());

document.querySelector("#searchBtn").addEventListener("click", function () {
  const category = document.querySelector("#searchInput").value;
  filterEventsByCategory(category, displayEvents);
});

displayEvents(events);
