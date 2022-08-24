function onEyes() {
  document.getElementById("eyes").innerHTML = '<i class="fa-solid fa-eye"></i>';

  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  setTimeout(function () {
    document.getElementById("eyes").innerHTML =
      '<i class="fa-solid fa-eye-slash"></i>';
    if (x.type === "text") {
      x.type = "password";
    } else {
      x.type = "text";
    }
  }, 1000);
}
