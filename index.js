const show = document.querySelector("#hamburger");
const content = document.querySelector("#list");
const blocked = document.querySelector("#block");

content.addEventListener("click", Removefunction);
show.addEventListener("click", myfunction);
function myfunction() {
  content.style.display = "block";
}
function Removefunction() {
  document.getElementById("list").style.display = "none";
}
