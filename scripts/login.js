function login() {
  var dialog = document.getElementById("pop-up-login");
  dialog.showModal();

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  var username = dialog.querySelector("#username");
  var password = dialog.querySelector("#password");

  function check_password() {
    var is_correct = localStorage.getItem(username.value) === password.value;
    var message_pop_up = document.getElementById(
      is_correct ? "pop-up-message-success" : "pop-up-message-error"
    );

    if (is_correct) {
      var user_notlogin = document.getElementById("user-notlogin");
      user_notlogin.style.display = "none";

      var user_login = document.getElementById("user-login");
      user_login.style.display = "flex";
      user_login.querySelector("#profile").innerHTML = username.value;
      dialog.close();
    } else {
      var text = message_pop_up.querySelector("#pop-up-message-text");
      text.innerHTML = "Ups, check your password or your user";
    }

    message_pop_up.showModal();
    message_pop_up.addEventListener("click", function () {
      message_pop_up.close();
    });
    return is_correct;
  }

  var localStorage = window.localStorage;
  var dialog = document.getElementById("pop-up-login");

  var success = dialog.querySelector("#success");

  success.addEventListener("click", function () {
    check_password();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      check_password();
    }
  });
}

function openRegister() {
  document.getElementById("pop-up-login").close();
  document.getElementById("register-pop-up").showModal();
}
