window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

window.addEventListener('load', () => {
  if (typeof HSSelect !== 'undefined') {
    HSSelect.autoInit()
  }
})

//   CONTACT FORM SUBMISSION USING GOOGLE APPS SCRIPT //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const statusDiv = form.querySelector(".status");

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqoywYuqSya6VniUPiTefDwB7iUIbrgywGlEU0wjA4Ioqcq_QkOABbSmHw4iXdsu86LA/exec";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusDiv.classList.remove("hidden");
    statusDiv.innerText = "Sending message...";

    const formData = new FormData(form);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    })
      .then(res => res.text())
      .then(data => {
        if (data === "success") {
          statusDiv.innerText = "✅ Message sent successfully!";
          form.reset();
        } else {
          statusDiv.innerText = "❌ Something went wrong. Try again.";
        }
      })
      .catch(err => {
        statusDiv.innerText = "❌ Error submitting form.";
        console.error(err);
      });
  });
});


