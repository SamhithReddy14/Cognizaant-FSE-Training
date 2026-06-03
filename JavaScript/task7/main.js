const events = [
  { name: "Book Fair", seats: 4 },
  { name: "Dance Show", seats: 2 }
];

const eventList = document.querySelector("#eventList");

function renderEvents() {
  eventList.innerHTML = "";

  events.forEach(function (eventItem) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const seats = document.createElement("p");
    const registerBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    title.textContent = eventItem.name;
    seats.textContent = `Seats: ${eventItem.seats}`;
    registerBtn.textContent = "Register";
    cancelBtn.textContent = "Cancel";

    registerBtn.addEventListener("click", function () {
      if (eventItem.seats > 0) {
        eventItem.seats--;
        renderEvents();
      }
    });

    cancelBtn.addEventListener("click", function () {
      eventItem.seats++;
      renderEvents();
    });

    card.append(title, seats, registerBtn, cancelBtn);
    eventList.appendChild(card);
  });
}

renderEvents();
