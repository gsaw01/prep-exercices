CREATE TABLE recipe (
  recipe_id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredient (
  ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
  ingredient_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE category (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE recipe_category (
  recipe_id INT,
  category_id INT,
  PRIMARY KEY (recipe_id, category_id),
  FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE
);

CREATE TABLE recipe_ingredient (
  recipe_id INT,
  ingredient_id INT,
  amount VARCHAR(50) NOT NULL DEFAULT 'to taste',
  PRIMARY KEY (recipe_id, ingredient_id),
  FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id) ON DELETE CASCADE,
  FOREIGN KEY (ingredient_id) REFERENCES ingredient(ingredient_id) ON DELETE CASCADE
);

CREATE TABLE recipe_step (
  step_id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_id INT,
  step_description TEXT NOT NULL,
  step_order INT NOT NULL CHECK (step_order > 0),
  FOREIGN KEY (recipe_id) REFERENCES recipe(recipe_id) ON DELETE CASCADE,
  UNIQUE (recipe_id, step_order)
);