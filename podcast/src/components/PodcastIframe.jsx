import React from "react";
import "../assets/styles/components/PodcastIframe.css";

const PodcastIframe = ({ source, title }) => {
  return (
    <iframe
      title={title}
      className="PodcastIframe"
      src={source}
      allow="encrypted-media"
    />
  );
};

export default PodcastIframe;
