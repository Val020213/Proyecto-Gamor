import createUserRanking from "../components/createUserRanking.js";

const getUsers = async () => {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?game_id=${localStorage.getItem(
        "game"
      )}&first=100`,
      {
        method: "GET",
        headers: {
          "Client-ID": localStorage.getItem("twitch_client_id"),
          Authorization: `Bearer ${localStorage.getItem(
            "twitch_access_token"
          )}`,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const searchUser = async () => {
  console.log("searchUser");

  try {
    const users = await getUsers();

    var result = "";
    console.log(users);

    for (var i = 0; i < users.data.length; i++) {
      var user = users.data[i];

      result += createUserRanking(
        i + 1,
        user.user_name,
        user.thumbnail_url.replace("{width}x{height}", "32x32")
      );
    }
    var table = document.getElementById("ranking-table");
    table.innerHTML = result;
  } catch (err) {
    console.log(err);
  }
};

document
  .getElementById("search-user")
  .addEventListener("click", () => searchUser());
