const theme_button = document.getElementById("change-theme");

theme_button.addEventListener("click", () => {
  const current = document.body.getAttribute("theme");
  console.log(current);
  document.body.setAttribute("theme", current === "light" ? "dark" : "light");
});
