import React, { useState } from "react";
import Card from "./Components/Card";
import "./app.css";

const App = () => {
  const [image, setImage] = useState(false);
  const [background, setBackground] = useState(false);
  const handleClick = () => {
    setImage((prev) => !prev);
    setBackground((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        transition: " background 5s ease",
      
        background: background
          ? "linear-gradient(to right, #000080, #800080)"
          : "linear-gradient(direction, color1, color2)",

        justifyContent: "center",
        alignItems: "center",
        transition: "5s",
      }}
    >
      <div>
        <button
          onClick={handleClick}
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            height: "1100px",
            background:"linear-gradient(to right, #ff7e5f, #feb47b)",
            color:"white"
          }}
        >
          Click Here
        </button>
      </div>
      {image && (
        <div>
          <Card
            title="Beautiful Landscape"
            content="A beautiful view of the mountains during sunset."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuRviGmuOIjiaBd9elsOJ9lthIA9hKV6JGQ&s"
            onError={handleClick}
          />
          <Card
            title="Delicious Food"
            content="A delicious plate of pasta with fresh ingredients."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzOZVCWcXOvAK8gANInnrH1xXmbvgtsVRuA&s"
            onError={handleClick}
          />
          <Card
            title="City Lights"
            content="A stunning view of the city skyline at night."
            image="https://cdn.pixabay.com/photo/2016/11/18/21/47/buildings-1837028_640.jpg"
            onError={handleClick}
          />
        </div>
      )}

      <div>
        {" "}
        {image != <p>Failed to load image. Please try again later.</p>}
      </div>
    </div>
  );
};

export default App;
