const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log("Form submission started");

  const payload = {
    name: form.elements.userName.value,
    email: form.elements.email.value
  };

  console.log("Request payload:", payload);

  try {
    debugger;
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("Network response status:", response.status);
    message.textContent = "Check Console, Sources, and Network tabs in DevTools.";
  } catch (error) {
    console.log("Registration error:", error);
    message.textContent = "Registration failed. Check console logs.";
  }
});
