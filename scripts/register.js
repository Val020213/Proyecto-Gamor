function register() {
  var dialog = document.getElementById("register-pop-up");
  dialog.showModal();

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  function complete_register() {
    const username = dialog.querySelector("#username").value;
    const password = dialog.querySelector("#password").value;
    const confirm_password = dialog.querySelector("#confirm-password").value;

    var is_correct =
      (password === confirm_password) & (username !== "") & (password !== "");
    var message_pop_up = document.getElementById(
      is_correct ? "pop-up-message-success" : "pop-up-message-error"
    );

    if (is_correct) {
      localStorage.setItem(username, password);
      dialog.close();
    } else {
      var text = message_pop_up.querySelector("#pop-up-message-text");
      text.innerHTML = "Ups, your password doesnt match";
    }

    message_pop_up.showModal();
    message_pop_up.addEventListener("click", function () {
      message_pop_up.close();
    });

    return is_correct;
  }

  var success = dialog.querySelector("#success");

  success.addEventListener("click", function () {
    complete_register();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      complete_register();
    }
  });
}

function openLogin() {
  document.getElementById("register-pop-up").close();
  document.getElementById("pop-up-login").showModal();
}
