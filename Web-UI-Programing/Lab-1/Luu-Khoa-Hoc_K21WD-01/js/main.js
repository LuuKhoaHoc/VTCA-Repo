const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const inputErr = document.querySelectorAll(".form-message");

signUpButton.addEventListener("click", () =>
  container.classList.add("left-panel-active")
);
signUpButton.addEventListener("click", () =>
  inputErr.forEach(function (value) {
    value.innerHTML = "";
  })
);
signInButton.addEventListener("click", () =>
  container.classList.remove("left-panel-active")
);
signInButton.addEventListener("click", () =>
  inputErr.forEach(function (value) {
    value.innerHTML = "";
  })
);
