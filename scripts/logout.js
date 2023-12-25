function logout() {
  var user_login = document.getElementById("user-login");
  user_login.style.display = "none";

  var user_notlogin = document.getElementById("user-notlogin");
  user_notlogin.style.display = "flex";
}
