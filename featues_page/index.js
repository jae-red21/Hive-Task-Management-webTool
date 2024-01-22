document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Todo");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

    });
  });