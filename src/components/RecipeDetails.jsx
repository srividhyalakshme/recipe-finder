import React from "react";
import { useParams } from "react-router-dom";
import JSON from "../data/recipe.json";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = JSON.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2 style={{ marginTop: "100px" }}>Recipe not found</h2>;
  }

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h1>{recipe.name}</h1>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name} width="400" height="250" />
      )}

      {/* Ingredients */}
      {recipe.details && recipe.details.length > 0 && (
        <>
          <h2>Ingredients</h2>
          <ul>
            {recipe.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Rice (optional) */}
      {recipe.rice && recipe.rice.length > 0 && (
        <>
          <h2>Rice</h2>
          <ul>
            {recipe.rice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Cooking steps (try both keys) */}
      {((recipe.cooking && recipe.cooking.length > 0) ||
        (recipe.Cooking && recipe.Cooking.length > 0)) && (
        <>
          <h2>Cooking</h2>
          <ul>
            {(recipe.cooking || recipe.Cooking).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Step details */}
      {recipe.stepDetails && recipe.stepDetails.length > 0 && (
        <>
          <h2>Steps</h2>
          <ol>
            {recipe.stepDetails.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}

      {/* Time Breakdown */}
      {recipe["Time Breakdown"] && recipe["Time Breakdown"].length > 0 && (
        <>
          <h2>Time Breakdown</h2>
          <ul>
            {recipe["Time Breakdown"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Serving */}
      {recipe.Serving && recipe.Serving.length > 0 && (
        <>
          <h2>Serving</h2>
          <ul>
            {recipe.Serving.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
