var EmployeeList = []; // mang 1 chieu luu lai so luong
var count = 0; // luu lai so luong

class Employee {
  constructor(ID, FullName, SecurityNo, Salary) {
    this.ID = ID;
    this.FullName = FullName;
    this.SecurityNo = SecurityNo;
    this.Salary = Salary;
  }
  show() {
    alert(
      "Employee infomation:\nID:" +
        this.id +
        "\nFullname:" +
        this.FullName +
        "\nSecurityNo:" +
        this.SecurityNo +
        "\nSalary:" +
        this.Salary
    );
  }
}

function ADD() {
  var ID = document.forms["fAddEmployee"]["txtID"].value;
  var fname = document.forms["fAddEmployee"]["txtFirstName"].value;
  var lname = document.forms["fAddEmployee"]["txtLastName"].value;
  var snumber = document.forms["fAddEmployee"]["txtSecurityNumber"].value;
  var salary = document.forms["fAddEmployee"]["txtSalary"].value;
  var err = CheckInput(ID, fname, lname, snumber, salary);
  var fullname = fname + " " + lname;
  if (err != "");
  else {
    // tao ra 1 nv co thong tin nhap lieu tren from
    var emp = new Employee(ID, fullname, snumber, salary);
    //them so luong cuoi danh sach
    EmployeeList.push(emp);
    count++;
    // xuat so luong tren bang
    // cho the span co id la count
    document.getElementById("count").innerText = count;
    //chen 1 dong tren bang giao dien
    var table = document.getElementById("tbEmployeeList");
    var row = table.insertRow(-1);
    var cellID = row.insertCell(0);
    var cellFullName = row.insertCell(1);
    var cellSNumber = row.insertCell(2);
    var cellSalary = row.insertCell(3);
    cellID.innerText = emp.ID;
    cellFullName.innerText = emp.FullName;
    cellSNumber.innerText = emp.SecurityNo;
    cellSalary.innerText = emp.Salary;
    clearErr();
  }
}

function CheckID(ID) {
  return EmployeeList.find((data) => data.ID == ID);
}

function CheckInput(ID, fname, lname, snumber, salary) {
  var err = "";

  if (ID == "")
    err += document.getElementById("idErr").innerText = "Please enter your ID";
  else if (isNaN(ID))
    err += document.getElementById("idErr").innerText = "ID must be a number";
  setTimeout(function () {
    document.getElementById("idErr").innerText = "";
  }, 3000);
  if (CheckID(ID))
    err += document.getElementById("idErr").innerText =
      "ID has already in list";
  setTimeout(function () {
    document.getElementById("idErr").innerText = "";
  }, 3000);
  if (fname == "")
    err += document.getElementById("fnameErr").innerText =
      "Please enter first name";
  setTimeout(function () {
    document.getElementById("fnameErr").innerText = "";
  }, 3000);
  if (lname == "")
    err += document.getElementById("lnameErr").innerText =
      "Please enter last name";
  setTimeout(function () {
    document.getElementById("lnameErr").innerText = "";
  }, 3000);
  if (snumber == "")
    err += document.getElementById("snumErr").innerText =
      "Please enter security number";
  else if (isNaN(snumber))
    err += document.getElementById("snumErr").innerText = "Only enter a number";
  setTimeout(function () {
    document.getElementById("snumErr").innerText = "";
  }, 3000);
  if (salary == "")
    err += document.getElementById("salaryErr").innerText =
      "Please enter salary";
  if (isNaN(salary))
    err += document.getElementById("salaryErr").innerText =
      "Only enter a number";
  setTimeout(function () {
    document.getElementById("salaryErr").innerText = "";
  }, 3000);
  return err;
}
function clearErr() {
  document.getElementById("idErr").innerText = "";
  document.getElementById("fnameErr").innerText = "";
  document.getElementById("lnameErr").innerText = "";
  document.getElementById("snumErr").innerText = "";
  document.getElementById("salaryErr").innerText = "";
}
