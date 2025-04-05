/*

----->>> 1. What made you decide when to embed information? What assumptions did you make? <<<------

It all depends on the goal of the application and the required complexity. For a relatively simple recipe search website,
the recipe itself is the main entity. Everything else (ingredients, steps, categories) exists in the context of the recipe.

That’s why embedding data (ingredients, steps, categories) in the recipe document seems like a good approach: it allows us to retrieve
everything we need in a single query. Should be good for performance and simplicityy.

If we assume that the website also allows users to serch/filter recipes by categories and ingredients, it’s also a good idea to keep
ingredients and categories in separate collections. These entities are reusable, and storing them separately allows more efficient querying.
These collections can then be linked to the recipe document.

Steps, on the other hand, are quite unique to each recipe and don’t need to be stored separately, creating a separate
collection for them would lead to unnecessary complexity.

*/

// Schema for category

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Schema for ingredient

const ingredientSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Recipe Schema

const recipeSchema = new Schema({
  name: { type: String, required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  ingredients: [
    {
      ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient' },
      quantity: {
        type: Number,
        required: true,
        min: [0, 'Must be positive'],
      },
      unit: { type: String, required: true },
    },
  ],
  steps: [
    {
      step_order: { type: Number, required: true },
      description: { type: String, required: true },
    },
  ],
});

/*

----->>> If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why? <<<------

Again, it all depends on the complexity of the application and data. If we only want to store basic information (ingredients, steps, categories),
MongoDB seems like a good choice. We can store everything in a single document, which simplifies queries and the database structure.

But if our data becomes more complex with many relationships (let's say we want to add calories, vitamins, user reviews, ratings, etc),
MySQL would likely be a better choice choice. 

*/
