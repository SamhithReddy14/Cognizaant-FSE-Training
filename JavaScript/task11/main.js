const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.elements.userName.value.trim();
  const email = form.elements.email.value.trim();
  const selectedEvent = form.elements.eventName.value;
  let isValid = true;

  document.querySelector("#nameError").textContent = "";
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#eventError").textContent = "";

  if (name === "") {
    document.querySelector("#nameError").textContent = " Name is required";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.querySelector("#emailError").textContent = " Valid email is required";
    isValid = false;
  }

  if (selectedEvent === "") {
    document.querySelector("#eventError").textContent = " Select an event";
    isValid = false;
  }

  message.textContent = isValid ? "Registration successful" : "Please fix the errors";
});
