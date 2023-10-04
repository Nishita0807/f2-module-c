document.addEventListener('DOMContentLoaded', function () {
    // Sample recipe data
    const recipes = [
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

  

    const recipesContainer = document.getElementById('recipes');
    const searchInput = document.getElementById('search');
    const showAllButton = document.getElementById('show-all');
    const showVegButton = document.getElementById('show-veg');
    const showNonVegButton = document.getElementById('show-non-veg');
    const above4_5Checkbox = document.getElementById('above-4-5');
    const below4_0Checkbox = document.getElementById('below-4-0');
    const searchIcon = document.querySelector('.s2');


    // Initial display of all recipes
    displayRecipes(recipes);

    // Function to display recipes
    function displayRecipes(recipes) {
        recipesContainer.innerHTML = '';

        recipes.forEach((recipe) => {
            const card = createRecipeCard(recipe);

            recipesContainer.appendChild(card);
        });
    }

    // Function to create a recipe card element
   // Function to create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.style.borderRadius = '16px';

    card.innerHTML = `
        <img src="${recipe.imageSrc}" alt="${recipe.name}" style="width: 289px; height: 200px; border-radius: 16px;">
        <div style="color:gray;font-size:16px; text-align:left;padding-top:12px;"> ${recipe.type}</div>
        <div id="img-rate" style="display:flex;align-items:center;justify-content:space-between;">
        <div id="r-name"><h2>${recipe.name}</h2></div>
        <div id="rate"><i class="fas fa-star" style="color: gold;font-size:16px;"></i><p  style="margin-left:12px;display:inline; color:gray; opacity:0.5;font-size:16px;">${recipe.rating}</p></div>
        </div>
        
        <div style="display:flex;align-items:center;justify-content:space-between;">
        <p style="font-size: 25px;
        font-style: normal;
        font-weight: 600; color:#DC582A;" > ${recipe.time}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;">
        <div class="like-button ${recipe.isLiked ? 'liked' : ''}"><i style="font-size: 24px;" class="fa-regular fa-heart"></i></div>
        <div><i class="fa-regular fa-message" style="font-size: 24px;"></i></div>
        </div>
        </div>
       
        
       
    `;

    const likeButton = card.querySelector('.like-button');
    likeButton.addEventListener('click', () => {
        toggleLike(recipe);
        likeButton.classList.toggle('liked');
    });

    return card;
}


    // Function to toggle the "like" status of a recipe
    function toggleLike(recipe) {
        recipe.isLiked = !recipe.isLiked;
    }

    // Event listeners for filters, search, and like buttons
  // Event listeners for filters, search, and like buttons
searchInput.addEventListener('input', filterRecipes);
searchInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) { // Check if the key pressed is Enter
        const searchTerm = searchInput.value.toLowerCase();
        filterRecipes(undefined, undefined, searchTerm);
    }
});
showAllButton.addEventListener('click', () => filterRecipes());
showVegButton.addEventListener('click', () => filterRecipes('veg'));
showNonVegButton.addEventListener('click', () => filterRecipes('non-veg'));
above4_5Checkbox.addEventListener('change', () => {
    filterRecipes(undefined, above4_5Checkbox.checked ? 'above-4-5' : 'all');
});

// Event listener for "Below 4" checkbox
below4_0Checkbox.addEventListener('change', () => {
    filterRecipes(undefined, below4_0Checkbox.checked ? 'below-4-0' : 'all');
});
searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterRecipes(undefined, undefined, searchTerm);
});

// Function to filter recipes based on search, type, and rating
function filterRecipes(typeFilter = 'all', ratingFilter = 'all') {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredRecipes = recipes.filter((recipe) => {
        const nameMatch = recipe.name.toLowerCase().includes(searchTerm);

        if (typeFilter === 'all') {
            return nameMatch;
        }

        if (typeFilter === 'veg') {
            return nameMatch && recipe.type === 'veg';
        }

        if (typeFilter === 'non-veg') {
            return nameMatch && recipe.type === 'non-veg';
        }

        return false;
    });

    let filteredByRating = filteredRecipes;

    if (ratingFilter === 'above-4-5') {
        filteredByRating = filteredRecipes.filter((recipe) => parseFloat(recipe.rating) >= 4.0);
    } else if (ratingFilter === 'below-4-0') {
        filteredByRating = filteredRecipes.filter((recipe) => parseFloat(recipe.rating) < 4.0);
    }

    displayRecipes(filteredByRating);
}
});

// JavaScript code (in your script.js file)
const hamburger = document.getElementById("hamburger");
let dropdownVisible = false; // Track dropdown visibility
let dropdownMenu;

// Function to create and display the dropdown menu
function showDropdown() {
    if (!dropdownVisible) {
        dropdownMenu = document.createElement("div");
        dropdownMenu.id = "level";
        dropdownMenu.style.width = "300px";
        dropdownMenu.style.height = "100%";
        dropdownMenu.style.backgroundColor = "white";
        dropdownMenu.style.position = "fixed";
        dropdownMenu.style.top = "0px";

        // Add your links or content inside the dropdownMenu div
        dropdownMenu.innerHTML = `
           <div style="display:flex; align-items:center; justify-content:space-around">
           <div><img src="./cookpal.png" alt="cookpal" /></div>
           <div><img src="./p.png" alt="person"></div>

           </div>
           <ul style="list-style:none">
           <li>Home</li>
           <li>Explore</li>
           <li>Help</li></ul>
        `;

        // Append the dropdownMenu to the body
        document.body.appendChild(dropdownMenu);

        dropdownVisible = true;
    } else {
        // If dropdown is already visible, hide it
        hideDropdown();
    }
}

// Function to hide the dropdown
function hideDropdown() {
    if (dropdownMenu) {
        document.body.removeChild(dropdownMenu);
        dropdownVisible = false;
    }
}

// Add a click event listener to the hamburger icon
hamburger.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent click from reaching document
    showDropdown();
});

// Add a click event listener to the document to close the dropdown
document.addEventListener("click", function(event) {
    if (dropdownVisible && event.target !== hamburger) {
        // If the dropdown is visible and the click is not on the hamburger icon, hide the dropdown
        hideDropdown();
    }
});

