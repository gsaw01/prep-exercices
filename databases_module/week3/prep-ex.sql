-- Was your database already in 2NF / 3NF?

-- Previously created tables already follow normalization rules.
-- 1NF: 
--    -- we already have single-valued columns;
--    -- fixed data types;
--    -- unique column names;
--    -- no duplicates, as every record has primary key;
--    -- order of rows or columns doesn't matter;
-- 2NF: 
--    -- we don't have partial dependencies (there are no columns
--       that depend on the part of the primary key);
-- 3NF: 
--    -- looks like we don't have columns that depend on non-key columns,
--       so no transitive dependencies.


-- What can be improved:
-- We can use transactions while adding recipes to ensure data integrity

START TRANSACTION;
INSERT INTO recipes(name) VALUES('New Recipe');
INSERT INTO recipe_ingredients(recipe_id, ingredient_id) VALUES(1, 5);
COMMIT;

--

CREATE DATABASE recipes_db;
USE recipes_db;

CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE recipe_categories (
  recipe_id INT,
  category_id INT,

  PRIMARY KEY (recipe_id, category_id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE recipe_ingredients (
  recipe_id INT,
  ingredient_id INT,

  PRIMARY KEY (recipe_id, ingredient_id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
);

CREATE TABLE steps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL
);

CREATE TABLE recipe_steps (
  recipe_id INT,
  step_id INT,
  step_order INT NOT NULL,

  PRIMARY KEY (recipe_id, step_id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  FOREIGN KEY (step_id) REFERENCES steps(id) ON DELETE CASCADE
);