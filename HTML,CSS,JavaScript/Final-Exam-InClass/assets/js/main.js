var taiKhoanS = [];

class taiKhoan {
  constructor(TENDN, EMAIL, MATKHAU, GIOITINH) {
    this.TENDN = TENDN;
    this.EMAIL = EMAIL;
    this.MATKHAU = MATKHAU;
    this.GIOITINH = GIOITINH;
  }
}
function add() {
  var taiKhoan = document.forms["form1"]["name"].value;
  var email = document.forms["form1"]["mail"].value;
  var password = document.forms["form1"]["password"].value;
  var password1 = document.forms["form1"]["password1"].value;
  var gender = document.forms["form1"]["gender"].value;
  var checkAge = document.forms["form1"]["checkAge"].value;
  var check = document.forms["form1"]["check"].value;
  var err = CheckInput(
    taiKhoan,
    email,
    password,
    password1,
    gender,
    checkAge,
    check
  );
  if (err != "");
  else {
    var tk = new taiKhoan(
      taiKhoan,
      email,
      password,
      password1,
      gender,
      checkAge,
      check
    );
    taiKhoanS.push(tk);
    alert("Đăng ký thành công");
    clearErr();
  }
}

function checkTk(TENDN) {
  return taiKhoanS.find(
    (data) => data.TENDN == document.getElementById("TENDN").value
  );
}
function CheckInput(TENDN, EMAIL, MATKHAU, GIOITINH) {
  var err = "";

  if (TENDN == "")
    err += document.getElementById("nameErr").innerHTML =
      "Vui lòng không để trống tên đăng nhập";
  setTimeout(function () {
    document.getElementById("nameErr").innerHTML = "";
  }, 3000);
  if (checkTk(TENDN))
    err += document.getElementById("nameErr").innerHTML =
      "Tên đăng nhập đã tồn tại";
  setTimeout(function () {
    document.getElementById("nameErr").innerHTML = "";
  }, 3000);
  if (EMAIL == "")
    err += document.getElementById("mailErr").innerHTML =
      "Vui lòng không để trống email";
  setTimeout(function () {
    document.getElementById("mailErr").innerHTML = "";
  }, 3000);
  if (checkEmail == false)
    err += document.getElementById("mailErr").innerHTML = "Sai định dạng email";
  setTimeout(function () {
    document.getElementById("mailErr").innerHTML = "";
  }, 3000);
  if (MATKHAU == null || MATKHAU == "")
    err += document.getElementById("pwErr").innerHTML =
      "Vui lòng không để trống mật khẩu";
  setTimeout(function () {
    document.getElementById("pwErr").innerHTML = "";
  }, 3000);
  if (MATKHAU == null || MATKHAU == "")
    err += document.getElementById("pwErr1").innerHTML =
      "Vui lòng không để trống mật khẩu";
  setTimeout(function () {
    document.getElementById("pwErr1").innerHTML = "";
  }, 3000);
  if (GIOITINH == null)
    err += document.getElementById("gErr").innerHTML =
      "Vui lòng chọn giới tính";
  setTimeout(function () {
    document.getElementById("gErr").innerHTML = "";
  }, 3000);
  if (
    document.getElementById("password").value !=
    document.getElementById("password1").value
  )
    err += document.getElementById("pwErr1").innerHTML = "Mật khẩu không khớp";
  if (document.getElementById("checkAge").value == null)
    err += document.getElementById("ageErr").innerHTML =
      "Vui lòng tích vào ô này";
  setTimeout(function () {
    document.getElementById("ageErr").innerHTML = "";
  }, 3000);
  if (document.getElementById("check").value == null)
    err += document.getElementById("checkErr").innerHTML =
      "Vui lòng tích vào ô này";
  setTimeout(function () {
    document.getElementById("checkErr").innerHTML = "";
  }, 3000);
  return err;
}
function checkEmail(input) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input);
}
function clearErr() {
  document.getElementById("nameErr").innerText = "";
  document.getElementById("mailErr").innerText = "";
  document.getElementById("pwErr").innerText = "";
  document.getElementById("pw1Err").innerText = "";
  document.getElementById("gErr").innerText = "";
  document.getElementById("ageErr").innerText = "";
  document.getElementById("checkErr").innerText = "";
}
