const events = [
  { name: "Music Night", category: "Music", seats: 3 },
  { name: "Baking Class", category: "Workshop", seats: 5 },
  { name: "Guitar Jam", category: "Music", seats: 2 }
];

const eventList = document.querySelector("#eventList");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

function displayEvents(list) {
  eventList.innerHTML = list.map(function (eventItem) {
    return `<div><h3>${eventItem.name}</h3><p>${eventItem.category}</p><button onclick="register('${eventItem.name}')">Register</button></div>`;
  }).join("");
}

function register(eventName) {
  const eventItem = events.find(function (item) {
    return item.name === eventName;
  });

  if (eventItem && eventItem.seats > 0) {
    eventItem.seats--;
    alert(`Registered for ${eventItem.name}`);
  }
}

categoryFilter.onchange = function () {
  const selectedCategory = categoryFilter.value;
  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(function (eventItem) {
        return eventItem.category === selectedCategory;
      });
  displayEvents(filteredEvents);
};

searchInput.onkeydown = function () {
  const searchText = searchInput.value.toLowerCase();
  const result = events.filter(function (eventItem) {
    return eventItem.name.toLowerCase().includes(searchText);
  });
  displayEvents(result);
};

displayEvents(events);
