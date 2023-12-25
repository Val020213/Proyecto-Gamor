function changeGame(name, id) {
  name = name.toUpperCase();
  console.log(name);
  console.log(id);
  document.getElementById("game-name").innerHTML = name;
  localStorage.setItem("game", id);
}