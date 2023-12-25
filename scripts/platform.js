function changePlatform(idPlatform) {
  var platform_container = document.getElementById("choose-platform");
  var platforms = platform_container.querySelectorAll("a");

  for (i = 0; i < platforms.length; i++) {
    platforms[i].removeAttribute("selected");
  }
  platforms[idPlatform].setAttribute("selected", "True");
}
