const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (let i = 0; i < ingredients.length; i++) {
  const ingredientList = document.createElement("li");
  ingredientList.innerHTML = ingredients[i];
  ingredientList.setAttribute("class", "item");
  document.getElementById("ingredients").appendChild(ingredientList);
}