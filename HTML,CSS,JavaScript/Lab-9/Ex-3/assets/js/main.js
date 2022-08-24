function ValidateEmail(input) {
  var mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(mailFormat)) {
    alert("Correct email address!");
    document.form1.text1.focus();
    return true;
  } else {
    if (input.value == "") {
      alert("You didn't enter an email address.");
      document.form1.text1.focus();
      return false;
    } else {
      alert("Incorrect email!");
      document.form1.text1.focus();
      return false;
    }
  }
}
