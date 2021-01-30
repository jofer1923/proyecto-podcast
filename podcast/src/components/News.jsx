import React from "react";
import TituloPodcast from "./TituloPodcast";
import ButtonPodcast from "./ButtonPodcast";
import "../assets/styles/components/News.css";

const News = () => {
  return (
    <section className="fond">
      <div className="nov">
        <TituloPodcast title="¿Querés las últimas novedades?" color={false} />
        <ButtonPodcast title="ESCUCHÁ LOS EPISODIOS" url="#" />
      </div>
    </section>
  );
};

export default News;
