function main() {
  //render side bar with default selected ALL category
  //render cat-header
  //render posts based on cat-header
}

function renderCategoryHeader() {
  const postSectionDiv = document.getElementById("post-section");
  //Declaring variables for dynamic rendering of Category Header
  let activeIcon = "";
  let activeTitle = "";
  let activeDescription = "";

  //Check which category is active then return the category name
  let activeCategoryName = "";
  const categoriesArray = document
    .getElementById("category-navbar")
    .querySelectorAll("a");
  for (let i = 0; i < categoriesArray.length; i++) {
    if (categoriesArray[i].classList.contains("active-category")) {
      activeCategoryName = categoriesArray[i].innerText;
    }
  }

  //Switch Case - active Icon, Title, Description
  switch (activeCategoryName) {
    case "All":
      activeIcon = "fas fa-bars fa-3x";
      activeTitle = "<h2>All</h2>";
      activeDescription =
        "<p>All the adventures in the world await. Join us now and be an adventurer!</p>";
      break;
    case "Terra":
      activeIcon = "fas fa-mountain fa-3x";
      activeTitle = "<h2>Terra</h2>";
      activeDescription =
        "<p>Welcome to the Terra adventures, where land-loving creatures like you gather for a Rocky journey.</p>";
      break;
    case "Ocean":
      activeIcon = "fas fa-water fa-3x";
      activeTitle = "<h2>Ocean</h2>";
      activeDescription =
        "<p>Welcome to the Ocean adventures, where sea-loving creatures like you gather for a Wavy journey.</p>";
      break;
    case "Forest":
      activeIcon = "fas fa-tree fa-3x";
      activeTitle = "<h2>Forest</h2>";
      activeDescription =
        "<p>Welcome to the Forest adventures, where greenery-loving creatures like you gather for a Leafy journey.</p>";
      break;
    case "City":
      activeIcon = "fas fa-city fa-3x";
      activeTitle = "<h2>City</h2>";
      activeDescription =
        "<p>Welcome to the City adventures, where metropolis-loving creatures like you gather for an Ambient journey.</p>";
      break;
    case "Foodie":
      activeIcon = "fas fa-utensils fa-3x";
      activeTitle = "<h2>Foodie</h2>";
      activeDescription =
        "<p>Welcome to the Foodie adventures, where dessert-loving creatures like you gather for a Sugary journey.</p>";
      break;
    case "Games-night":
      activeIcon = "fas fa-gamepad fa-3x";
      activeTitle = "<h2>Games-night</h2>";
      activeDescription =
        "<p>Welcome to the Games-night adventures, where boardgames-loving creatures like you gather for an Elated journey.</p>";
      break;
    case "Energetic":
      activeIcon = "fas fa-glass-cheers fa-3x";
      activeTitle = "<h2>Energetic</h2>";
      activeDescription =
        "<p>Welcome to the Energetic adventures, where festive-loving creatures like you gather for a Zestful journey.</p>";
      break;
    case "Kiddos":
      activeIcon = "fas fa-child fa-3x";
      activeTitle = "<h2>Kiddos</h2>";
      activeDescription =
        "<p>Welcome to the Kiddos adventures, where children-loving creatures like you gather for an Uplifting journey.</p>";
      break;
  }

  //Render Category Header - Main Page
  postSectionDiv.innerHTML = `
  <div class="col-2">
    <div class="square-icon-bg">
      <i class="${activeIcon}"></i>
    </div> 
  </div>
  <div class="col-10">
    ${activeTitle}
    ${activeDescription}
  </div>
  `;
}

renderCategoryHeader();
