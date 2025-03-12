CREATE TABLE Recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Recipe_Categories (
    recipe_id INT,
    category_id INT,
    PRIMARY KEY (recipe_id, category_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE,
    INDEX idx_recipe_category (recipe_id, category_id)
);

CREATE TABLE Ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Recipe_Ingredients (
    recipe_id INT,
    ingredient_id INT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id) ON DELETE CASCADE,
    INDEX idx_recipe_ingredient (recipe_id, ingredient_id)
);

CREATE TABLE Recipe_Steps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT NOT NULL,
    step_number INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id) ON DELETE CASCADE,
);