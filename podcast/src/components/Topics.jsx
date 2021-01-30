import React from "react";

import "../assets/styles/components/Topics.css";

const Topics = ({ img, title }) => {
  return (
    <div className="topicos-icons-item">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Topics;
