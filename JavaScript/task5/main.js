function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

const communityEvent = new Event("Health Awareness Camp", "2026-06-25", 10);
const output = document.querySelector("#output");

Object.entries(communityEvent).forEach(function ([key, value]) {
  output.textContent += `${key}: ${value}\n`;
});

output.textContent += `availability: ${communityEvent.checkAvailability()}`;
