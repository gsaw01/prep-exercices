-- vegetarian recipes with potatoes

SELECT r.name 
FROM recipes AS r
JOIN recipe_categories AS rc ON r.id = rc.recipe_id
JOIN categories AS c ON rc.category_id = c.id
JOIN recipe_ingredients AS ri ON r.id = ri.recipe_id
JOIN ingredients AS i ON ri.ingredient_id = i.id
WHERE c.name = 'Vegetarian' AND i.name = 'Potato';

-- cakes that do not need baking

SELECT r.name 
FROM recipes AS r
JOIN recipe_categories AS rc ON r.id = rc.recipe_id
JOIN categories AS c ON rc.category_id = c.id
WHERE c.name = 'Cake' AND c.name = 'No-Bake';

-- all vegan and japanese recipes
SELECT DISTINCT r.name 
FROM recipes AS r
JOIN recipe_categories AS rc ON r.id = rc.recipe_id
JOIN categories AS c ON rc.category_id = c.id
WHERE c.name IN ('Japanese', 'Vegan');