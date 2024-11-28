import React from "react";

const Card = ({ title, content, image, onError }) => {
  return (
    <div className="card">
      {image && (
        <img src={image} alt={title} onError={onError} className="card-image" />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{content}</p>
      </div>
    </div>
  );
};

export default Card;
