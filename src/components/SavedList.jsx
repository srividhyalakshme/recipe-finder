import React from "react";
import { Link } from "react-router-dom";

function Saved({ savedItems }) {
  return (
    <div style={{ marginTop: "50px", padding: "20px" }}>
      <h1>Saved Recipes</h1>

      {savedItems.length === 0 ? (
        <p>No recipes saved yet.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px", // space between items
          }}
        >
          {savedItems.map((item) => (
            <div
              key={item.id}
              style={{
                width: "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              {/* Image clickable -> redirects */}
              <Link to={`/recipe/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </Link>

              {/* Details */}
              <div style={{ padding: "10px" }}>
                <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
                  {item.name}
                </h2>
                {item.steps && item.steps.length > 0 && (
                  <div>
                    <h3>Steps:</h3>
                    <ol>
                      {item.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;
