import React from "react";
import TituloPodcast from "./TituloPodcast";
import "../assets/styles/components/Episodios.css";
import PodcastIframe from "./PodcastIframe";

const Episodios = () => {
  return (
    <section className="Episodios">
      <TituloPodcast color={false} title="Episodios" />
      <div className="Episodios__iframes">
        <PodcastIframe
          title="1"
          source="https://open.spotify.com/embed-podcast/show/2ySVrxGkN6n6frMTo9Nsrt"
        />
        <PodcastIframe
          title="2"
          source="https://open.spotify.com/embed-podcast/show/4kYCRYJ3yK5DQbP5tbfZby"
        />
        <PodcastIframe
          title="3"
          source="https://open.spotify.com/embed-podcast/show/5JxcIaIkN8zx3Zy7yD9snv"
        />
        <PodcastIframe
          title="4"
          source="https://open.spotify.com/embed-podcast/show/2Iibd5A6R7mxkCm4NwNmUn"
        />
      </div>
    </section>
  );
};

export default Episodios;
