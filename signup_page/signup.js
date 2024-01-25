function validateForm() {
  const form = document.getElementById("signup-form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirmPass");
  const phone = document.getElementById("phone");
  const birthDate = document.getElementById("birth-date");
  const genderInputs = document.getElementsByName("gender");
  const universityInput = document.getElementById("university");
  const fieldSelect = document.getElementById("field");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateInputs();
  });

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";

    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  const isValidEmail = (email) => {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();
    const phoneValue = phone.value.trim();
    const birthDateValue = birthDate.value.trim();

    if (usernameValue === "") {
      setError(username, "Name is required");
    } else {
      setSuccess(username);
    }

    if (emailValue === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Enter a valid email ");
    } else {
      setSuccess(email);
    }

    if (passwordValue === "") {
      setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      setError(password, "Password myst be at least 8 characters");
    } else {
      setSuccess(password);
    }

    if (confirmPassValue === "") {
      setError(confirmPass, "Confirmation required");
    } else if (confirmPassValue !== passwordValue) {
      setError(confirmPass, "Password don't match");
    } else {
      setSuccess(confirmPass);
    }

    if (phoneValue === "") {
      setError(phone, "Phone number required");
    } else {
      setSuccess(phone);
    }

    if (birthDateValue === "") {
      setError(birthDate, "Birthdate required");
    } else {
      setSuccess(birthDate);
    }

    const selectGender = Array.from(genderInputs).find(
      (input) => input.checked
    );

    if (!selectGender) {
      setError(genderInputs, "Please select gender.");
    } else {
      setSuccess(genderInputs);
    }

    if (universityInput.value.trim() === "") {
      setError(universityInput, "Please select Univerity.");
    } else {
      setSuccess(universityInput);
    }

    if (fieldSelect.value === "") {
      setError(fieldSelect, "Please select your field");
    } else {
      setSuccess(fieldSelect);
    }
  };
  if (!document.querySelector(".error")) {
    alert("Signup Successful");
  }
}
