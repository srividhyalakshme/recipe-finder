import React, { useState } from "react";
import "../App.css";
import JSON from '../data/recipe.json'
import { Link } from "react-router-dom";

const Recipe = ({onSave}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const recipes = JSON;

  // ✅ Filtering
  const filteredRecipes = recipes.filter((recipe) => {
      let matchCategory = true;
  if (activeCategory !== "All") {
    matchCategory = recipe.name
      .toLowerCase()
      .includes(activeCategory.toLowerCase());
  }
    // const matchCategory = activeCategory !== "All" || recipe.name.toLowerCase().includes(activeCategory.toLowerCase());
    const matchSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="recipe-container">
      

      <div className="left-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-buttons">
          {[
            "All",
            "Biryani",
            "Parotta",
            "Semi-gravy",
            "Fry-items",
            "Pizza",
            "Burger",
            "Ice cream",
            "Cake",
            "Chocolate",
            "Sweets",
          ].map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="recipes-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.name}</h3>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt="images" width='300' height='200' />
              </Link><br />
             <button className="save-button" onClick={() => onSave(recipe)}>
  ⭐ Save Recipe
</button>


            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
