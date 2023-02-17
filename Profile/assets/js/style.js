var typing = new Typed(".muliText", {
  strings: ["Coder", "Facebook", "Youtube"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
var introduce = new Typed(".introduce", {
  strings: [
    "Hà Văn Huy sinh năm 2001 đến từ Hải Dương, hiện tại tôi đang là sinh viên năm 4 chuyên ngành Công Nghệ Phần Mềm Trường Đại học Mỏ-Địa chất",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 10,
  backDelay: 1500,
});
//Open
// let iconPopup = document.querySelector(".icon-popup");
// //add 1 event DOM
// iconPopup.addEventListener("click", function handelPopup() {
//   document.querySelector(".content-popup").style.display = "block";
// });

// //Close
// let isClose = document.querySelector(".close");
// isClose.addEventListener("click", function handelPopup() {
//   document.querySelector(".content-popup").style.display = "none";
// });

function myFunction() {
  var x = document.querySelector(".content-popup");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var checkbox_toggle = document.getElementById("light-dark");
checkbox_toggle.addEventListener("change", function () {
  // THêm class dark cho body
  document.body.classList.toggle("dark");
});

