function fixValidate() {
  var text = document.getElementById("input").value;
  const result1 = text.trim();
  const result2 = result1.replace(/\s+/g, " ");
  document.getElementById("input").value = result2;
}
function reset() {
  document.getElementById("input").value = "";
}
