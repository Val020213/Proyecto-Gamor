function createCategory(number, title) {
  return `<div id="category_link" class="category-container">
        <p style="color: #908548;
        font-feature-settings: 'sups' on;
        font-size: 20px;
        font-style: normal;
        margin: 0;">/</p>
        <div class="container-column-left" style="gap: 4px; padding: 4px 0; justify-content: flex-start;">
          <p id="category-number-link" style="margin: 0;">${number}</p>
          <p id="category-name-link" style="font-size: 20px; margin: 0;">${title}</p>
          <svg style="width: 24px; height: 24px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L15 16M19 12L15 8" stroke="black" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>`;
}

categories = [
  "Action Games",
  "Sport Games",
  "Adventure Games",
  "Arcade Games",
  "Fantasy Games",
  "Strategy Games",
  "Shooter Games",
  "All Categories",
];

var categories_container = document.getElementById("categories");

console.log(categories_container);

categories.forEach((category) => {
  categories_container.innerHTML += createCategory(
    categories.indexOf(category) + 1,
    category
  );
});
