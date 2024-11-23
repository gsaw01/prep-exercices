/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

// SOLUTION 

let mealRecipe = {
      title: 'Ceasar Salad',
      servings: 2,
      ingredients: ['2 chicken breasts', '4 eggs', '1 napa cabbage']
};

for(let property in mealRecipe) {
      if(property === 'ingredients') {
            console.log(`Ingredients: ${mealRecipe[property].join(', ')}`)
      } else if(property === 'servings') {
            console.log(`Serves: ${mealRecipe[property]}`)
      } else {
            console.log(`Meal name: ${mealRecipe[property]}`)
      }
}