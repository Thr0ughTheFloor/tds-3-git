function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}
  
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function mousefx(){
  var fileUrl =  "http://127.0.0.1:5500/Javascript/Exercicios/SiteTerror/index.html" + "assets/somMouse.mp3";
  var audio = new Audio(fileUrl);
  audio.play();
}

window.addEventListener('click', mousefx, false);