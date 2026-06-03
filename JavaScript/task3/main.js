const events = [
  { name: "Food Festival", date: "2026-06-12", seats: 3 },
  { name: "Old Workshop", date: "2024-01-10", seats: 5 },
  { name: "Art Meetup", date: "2026-07-05", seats: 0 },
  { name: "Yoga Camp", date: "2026-08-15", seats: 4 }
];

const eventList = document.querySelector("#eventList");
const today = new Date();

events.forEach(function (eventItem) {
  const eventDate = new Date(eventItem.date);

  if (eventDate >= today && eventItem.seats > 0) {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${eventItem.name}</h3><p>Seats: ${eventItem.seats}</p><button>Register</button>`;

    card.querySelector("button").addEventListener("click", function () {
      try {
        if (eventItem.seats <= 0) {
          throw new Error("No seats available");
        }
        eventItem.seats--;
        card.querySelector("p").textContent = `Seats: ${eventItem.seats}`;
      } catch (error) {
        alert(error.message);
      }
    });

    eventList.appendChild(card);
  }
});
