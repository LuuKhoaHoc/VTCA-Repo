function giaithua() {
  var n = document.getElementById("n").value;
  let result = 0;
  var t = 1;
  for (var i = 0; i < n; i++) {
    t *= i;
    s += t;
  }
  return (document.getElementById("kq").innerText = s.value);
}
