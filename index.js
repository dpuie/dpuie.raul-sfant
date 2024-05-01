function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("scoala duminicala").style.display = "none";
  document.getElementById("resurse").style.display = "none";
  document.getElementById("poze").style.display = "none";
  document.getElementById("donatii").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showScoalaDuminicalaPage() {
  document.getElementById("scoala duminicala").style.display = "block";
  document.getElementById("resurse").style.display = "none";
  document.getElementById("poze").style.display = "none";
  document.getElementById("donatii").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function showResursePage() {
  document.getElementById("resurse").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("scoala duminicala").style.display = "none";
  document.getElementById("poze").style.display = "none";
  document.getElementById("donatii").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showPozePage() {
  document.getElementById("poze").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("scoala duminicala").style.display = "none";
  document.getElementById("resurse").style.display = "none";
  document.getElementById("donatii").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function showDonatiiPage() {
  document.getElementById("donatii").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("scoala duminicala").style.display = "none";
  document.getElementById("resurse").style.display = "none";
  document.getElementById("poze").style.display = "none";
}

function showContactPage() {
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("scoala duminicala").style.display = "none";
  document.getElementById("resurse").style.display = "none";
  document.getElementById("poze").style.display = "none";
  document.getElementById("donatii").style.display = "none";
}

showHomePage();

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var resurseLink = document.querySelectorAll("#top-menu-bar a")[2];
resurseLink.addEventListener("click", showResursePage);

var pozeLink = document.querySelectorAll("#top-menu-bar a")[3];
pozeLink.addEventListener("click", showPozePage);

var donatiiLink = document.querySelectorAll("#top-menu-bar a")[4];
donatiiLink.addEventListener("click", showDonatiiPage);

var contactLink = document.querySelectorAll("#top-menu-bar a")[5];
contactLink.addEventListener("click", showContactPage);
