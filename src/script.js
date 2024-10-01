document.getElementById("generate").addEventListener("click", generateRecipe);

function generateRecipe() {
  const ingredient = document.getElementById("ingredient").value.trim();
  const cuisine = document.getElementById("cuisine").value;

  if (!ingredient) {
    alert("Please enter an ingredient.");
    return;
  }

  const recipes = {
    Italian: {
      name: `Spaghetti with ${ingredient}`,
      cookingTime: "30 minutes",
      ingredients: [
        `200g spaghetti`,
        `${ingredient}`,
        `2 cloves garlic, minced`,
        `2 tablespoons olive oil`,
        `Salt and pepper to taste`,
        `Parmesan cheese (optional)`,
      ],
      instructions: [
        "Boil a pot of salted water and cook the spaghetti according to package instructions.",
        "In a pan, heat olive oil and sauté garlic until fragrant.",
        `Add the ${ingredient} and cook until fully cooked through.`,
        "Toss the cooked spaghetti with the garlic and ingredient mixture.",
        "Serve with grated Parmesan cheese if desired.",
      ],
    },
    Mexican: {
      name: `${ingredient} Tacos`,
      cookingTime: "20 minutes",
      ingredients: [
        `${ingredient}`,
        `2 tortillas`,
        `1/2 onion, chopped`,
        `1 teaspoon taco seasoning`,
        `Lettuce and salsa for topping`,
      ],
      instructions: [
        `Cook ${ingredient} with onions and taco seasoning in a pan until fully cooked.`,
        "Warm the tortillas in another pan or microwave.",
        "Assemble tacos by placing the cooked mixture on the tortillas.",
        "Top with lettuce and salsa, then serve immediately.",
      ],
    },
    Indian: {
      name: `Chicken Curry with ${ingredient}`,
      cookingTime: "40 minutes",
      ingredients: [
        `${ingredient}`,
        `1 can coconut milk`,
        `2 tablespoons curry powder`,
        `1 onion, chopped`,
        `Salt to taste`,
        `Rice for serving`,
      ],
      instructions: [
        "In a pot, sauté onions until soft.",
        `Add ${ingredient} and curry powder; cook for 5 minutes.`,
        "Pour in coconut milk and let simmer for 20 minutes until thickened.",
        "Serve hot with rice.",
      ],
    },
    Chinese: {
      name: `${ingredient} Stir-fry`,
      cookingTime: "15 minutes",
      ingredients: [
        `${ingredient}`,
        `1 cup mixed vegetables`,
        `2 tablespoons soy sauce`,
        `1 tablespoon vegetable oil`,
        `Cooked rice or noodles for serving`,
      ],
      instructions: [
        "Heat oil in a pan over medium-high heat.",
        `Add ${ingredient} and stir-fry for 2-3 minutes.`,
        "Add mixed vegetables and soy sauce; cook for another 5 minutes.",
        "Serve hot over rice or noodles.",
      ],
    },
    American: {
      name: `Grilled ${ingredient}`,
      cookingTime: "25 minutes",
      ingredients: [
        `${ingredient}`,
        `1 tablespoon olive oil`,
        `Salt and pepper to taste`,
        `Your choice of sides`,
      ],
      instructions: [
        `Preheat the grill and marinate ${ingredient} with olive oil, salt, and pepper.`,
        "Grill until fully cooked, about 10-15 minutes depending on thickness.",
        "Serve with your choice of sides.",
      ],
    },
  };

  const recipe = recipes[cuisine];
  if (!recipe) {
    document.getElementById(
      "recipe"
    ).innerText = `No recipe found for ${cuisine} with ${ingredient}.`;
    return;
  }

  const recipeOutput = `
        <h2>${recipe.name}</h2>
        <p><strong>Cooking Time:</strong> ${recipe.cookingTime}</p>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>
        <h3>Instructions:</h3>
        <ol>${recipe.instructions
          .map((item) => `<li>${item}</li>`)
          .join("")}</ol>
    `;

  document.getElementById("recipe").innerHTML = recipeOutput;
}
