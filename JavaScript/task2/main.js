const eventName = "Community Music Night";
const eventDate = "2026-06-10";
let availableSeats = 5;

const eventInfo = document.querySelector("#eventInfo");
const registerBtn = document.querySelector("#registerBtn");

function showEventInfo() {
  eventInfo.textContent = `${eventName} is on ${eventDate}. Seats left: ${availableSeats}`;
}

registerBtn.addEventListener("click", function () {
  if (availableSeats > 0) {
    availableSeats--;
    showEventInfo();
  }
});

showEventInfo();
