const events = [
  { name: "Music Night", category: "Music", seats: 4 },
  { name: "Yoga Session", category: "Health", seats: 7 }
];

function createEventCard(eventItem, prefix = "Event") {
  const { name, category, seats } = eventItem;
  return `<p>${prefix}: ${name} | ${category} | Seats: ${seats}</p>`;
}

const clonedEvents = [...events];
const filteredEvents = clonedEvents.filter(({ seats }) => seats > 0);

document.querySelector("#output").innerHTML = filteredEvents
  .map((eventItem) => createEventCard(eventItem))
  .join("");
