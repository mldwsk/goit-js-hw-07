//task 1.1: count all categories
const categoriesArray = document.querySelectorAll("li.item");
const numberOfCategories = categoriesArray.length;
console.log("Number of categories: " + numberOfCategories);

//task 1.2: display every category and number of items inside of it
let categoryAndItemNames = [];
for (let i = 0; i < numberOfCategories; i++) {
  categoryAndItemNames.push(categoriesArray[i].textContent);
  console.log(categoriesArray[i]);
}

let categoriesArrayChildren = [];
for (let i = 0; i < numberOfCategories; i++) {
    categoriesArrayChildren.push(categoriesArray[i].children);
    console.log(categoriesArrayChildren[i]);
  }
/*
for (let i = 0; i < numberOfCategories; i++) {
  console.log(categoryNamesAndItemCount[i]);
}

/*
for (let i = 0; i < numberOfCategories; i++) {
    console.log(categoriesArray[i].children);
}*/