import bgImage from "../assets/images/banner/banner.jpg";

import '../App.css'
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate =  useNavigate()
  return (
    <div className='banner-page'>
      <h1 style={{color: 'white', textAlign: "center", paddingTop: "150px" }}>
        Welcome to Recipe Cooking
      </h1>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <button 
          className="get-started-btn"
          onClick={() => navigate("/recipe")}  // 👈 goes to recipe page
        >
          Explore Meals <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Banner;

