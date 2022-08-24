function validate() {
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var coun = document.getElementById("select").value;
  var comment = document.getElementById("comment").value;
  var checkmail = email.includes("@gmail.com");

  if (fullName == "") {
    document.getElementById("checkName").style.visibility = "inherit";

    setTimeout(function () {
      document.getElementById("checkName").style.visibility = "hidden";
    }, 10000);
  }
  if (email == "" || checkmail == false) {
    document.getElementById("checkMail").style.visibility = "inherit";
    document.getElementById("checkMail").innerText =
      "Please enter a valid email";

    setTimeout(function () {
      document.getElementById("checkMail").style.visibility = "hidden";
    }, 10000);
  }
  if (phone == "") {
    document.getElementById("checkPhone").style.visibility = "inherit";

    setTimeout(function () {
      document.getElementById("checkPhone").style.visibility = "hidden";
    }, 10000);
  }
  if (isNaN(phone)) {
    //check if phone is a number
    document.getElementById("checkPhone").style.visibility = "inherit";
    document.getElementById("checkPhone").innerText = "Please enter a number";

    setTimeout(function () {
      document.getElementById("checkPhone").style.visibility = "hidden";
    }, 10000);
  }
}
