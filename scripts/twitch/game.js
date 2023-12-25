import createGameItem from "../components/createGameItem.js";

const getTopGames = async () => {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/games/top?first=100`,
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

const dataGame = async () => {
  try {
    const games = await getTopGames();
    console.log(games);
    var menu = document.getElementById("choose-game");
    var result = "";
    games.data.forEach((game) => {
      result += createGameItem(
        game.name,
        game.box_art_url.replace("{width}x{height}", "32x32"),
        game.id
      );
    });
    menu.innerHTML = result;
  } catch (err) {
    console.log(err);
  }
};

const search_game = document.getElementById("search_game");
search_game.addEventListener("click", () => dataGame());
