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


-- INITIAL DATA

INSERT INTO recipes (name) VALUES
('No-Bake Cheesecake'),
('Roasted Brussels Sprouts'),
('Mac & Cheese'),
('Tamagoyaki Japanese Omelette'),
('Potato Salad');

INSERT INTO categories (name) VALUES
('Cake'),
('No-Bake'),
('Vegetarian'),
('Vegan'),
('Gluten-Free'),
('Japanese');

INSERT INTO recipe_categories (recipe_id, category_id)
VALUES
  (1, 1), (1, 2), (1, 3),
  (2, 4), (2, 5),
  (3, 3),
  (4, 3), (4, 6),
  (5, 3);

INSERT INTO ingredients (name)
VALUES
  ('Condensed milk'), ('Cream Cheese'), ('Lemon Juice'), ('Pie Crust'), ('Cherry Jam'),
  ('Brussels Sprouts'), ('Sesame seeds'), ('Pepper'), ('Salt'), ('Olive oil'),
  ('Macaroni'), ('Butter'), ('Flour'), ('Milk'), ('Shredded Cheddar cheese'),
  ('Eggs'), ('Soy sauce'), ('Sugar'), ('Potato');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
  (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
  (2, 6), (2, 3), (2, 7), (2, 8), (2, 9), (2, 10),
  (3, 11), (3, 12), (3, 13), (3, 9), (3, 8), (3, 14), (3, 15),
  (4, 16), (4, 17), (4, 18), (4, 9), (4, 10),
  (5, 19);

INSERT INTO steps (description)
VALUES
  ('Beat Cream Cheese'), ('Add condensed Milk and blend'), ('Add Lemon Juice and blend'),
  ('Add the mix to the pie crust'), ('Spread the Cherry Jam'), ('Place in refrigerator for 3h'),
  ('Preheat the oven'), ('Mix the ingredients in a bowl'), ('Spread the mix on baking sheet'), ('Bake for 30 min'),
  ('Cook Macaroni for 8 min'), ('Melt butter in a saucepan'), ('Add flour, salt, pepper and mix'),
  ('Add Milk and mix'), ('Cook until mix is smooth'), ('Add cheddar cheese'), ('Add the macaroni'),
  ('Beat the eggs'), ('Add soya sauce, sugar and salt'), ('Add oil to a sauce pan'),
  ('Bring to medium heat'), ('Add some mix to the sauce pan'), ('Let it cook for 1 min'),
  ('Remove pan from fire'), ('Boil the potatoes until soft'), 
  ('Peel the potatoes and cut them into cubes'),
  ('Mix the potatoes with mayonnaise and salt'),
  ('Serve chilled');

INSERT INTO recipe_steps (recipe_id, step_id, step_order)
VALUES
  (1, 1, 1), (1, 2, 2), (1, 3, 3), (1, 4, 4), (1, 5, 5), (1, 6, 6),
  (2, 7, 1), (2, 8, 2), (2, 9, 3), (2, 10, 4),
  (3, 11, 1), (3, 12, 2), (3, 13, 3), (3, 14, 4), (3, 15, 5), (3, 16, 6), (3, 17, 7),
  (4, 18, 1), (4, 19, 2), (4, 20, 3), (4, 21, 4), (4, 22, 5), (4, 23, 6), (4, 24, 7),
  (5, 1, 1), (5, 2, 2), (5, 3, 3), (5, 4, 4);