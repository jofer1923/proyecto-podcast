import React from "react";
import "../assets/styles/components/TituloPodcast.css";

const TituloPodcast = ({ title, color }) => {
  return (
    <h2
      className={`"TituloPodcast", ${
        color ? "TitlePodcast__black" : "TitlePodcast__white"
      }`}
    >
      {title}
    </h2>
  );
};

export default TituloPodcast;
