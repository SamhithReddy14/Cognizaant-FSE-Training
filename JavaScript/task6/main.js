const events = [
  { name: "Rock Concert", category: "Music" },
  { name: "Painting Class", category: "Art" }
];

events.push({ name: "Classical Night", category: "Music" });

const musicEvents = events.filter(function (eventItem) {
  return eventItem.category === "Music";
});

const formattedCards = events.map(function (eventItem) {
  return `Workshop on ${eventItem.name}`;
});

document.querySelector("#musicEvents").innerHTML = musicEvents
  .map(function (eventItem) {
    return `<p>${eventItem.name}</p>`;
  })
  .join("");

document.querySelector("#cards").innerHTML = formattedCards
  .map(function (cardText) {
    return `<p>${cardText}</p>`;
  })
  .join("");
