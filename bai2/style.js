function ketqua() {
  var x = document.getElementById("a").value;
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
      sum += i;
    }
  }
  document.getElementById("b").value = sum;
}
