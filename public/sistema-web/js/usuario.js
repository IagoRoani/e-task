document.getElementsByClassName("link")[0].click();
function openCity(evt, cityName) {
  var detalhe, link;
  detalhe = document.getElementsByClassName("detalhe");
  for (i = 0; i < detalhe.length; i++) {
    detalhe[i].style.display = "none";
  }
  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
var colorVetor = [ "rgba(188, 17, 208, 1)", "rgb(127, 12, 180)", "rgba(15, 21, 184, 1)","rgb(15, 83, 184)","rgba(15, 159, 184, 1)", "rgba(15, 184, 26, 1)","rgb(147, 184, 15)", "rgba(212, 193, 17, 1)","rgb(212, 127, 17)",  "rgba(184, 15, 15, 1)"]
// var colorVetor = [1,2,3,4,5,6,7];
function ledCores() {
  // console.log(colorVetor);
  var g = 1;
  while (g > 0) {
    girarColor(colorVetor);
    g--;
  }
  border.style.backgroundImage = `linear-gradient(to bottom right,${colorVetor[0]},${colorVetor[1]},${colorVetor[2]},${colorVetor[3]},${colorVetor[4]},${colorVetor[5]}`;
}
function girarColor(v) {
  var c = v.length;
  var u = v[c - 1];
  for (var i = (c - 1); i > 0; i--) {
    v[i] = v[i - 1];
  }
  v[0] = u;
}