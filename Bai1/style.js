function send() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("pass").value;
  var c = document.getElementById("pass2").value;
  var d = document.getElementById("date").value;
  var e = document.getElementById("sothich").value;
  var f = document.getElementById("phone").value;
  var g = document.getElementById("link").value;
  if (/^[^0-9]+$/.test(a)) {
    document.getElementById("name").value;
  } else {
    alert("Name khong hop le");
  }

  const tg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
    b
  );
  if (tg) {
    document.getElementById("pass").value;
  } else {
    alert("MK khong hop le");
  }

  if (c == b) {
    document.getElementById("pass").value;
  } else {
    alert("mk khong khop");
  }

  if (d == "" || e == "" || g == "") {
    alert("Yeu cau bat buoc nhap ngay thang so thich duong dan");
    return;
  }

  if (/^[0-9]+$/.test(f)) {
    document.getElementById("phone").value;
  } else {
    alert("phai nhap so");
  }
}

function resetForm() {
  document.getElementById("form")[0].resetForm();
}
