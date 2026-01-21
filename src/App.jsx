import { useState } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Recipe from "./components/Recipe";
import Saved from './components/SavedList'
import Contact from "./components/Contact";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
   const [savedItems, setSavedItems] = useState([]);
     const handleSave = (recipe) => {
    // Prevent duplicates
    if (!savedItems.find((item) => item.id === recipe.id)) {
      setSavedItems([...savedItems, recipe]);
    }
  };

  return (
    <>
      <BrowserRouter>
      <Navbar savedCount={savedItems.length} />

      <Routes>
        <Route path="/" element={<Banner/>} /> 
        <Route path="/recipe" element={<Recipe onSave={handleSave}/>} />
        <Route path="/saved" element={<Saved savedItems={savedItems}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

