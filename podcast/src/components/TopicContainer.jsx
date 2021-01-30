import React from "react";
import TituloPodcast from "./TituloPodcast";
import Topics from "./Topics";
import TrabajoRemoto from "../assets/static/icon1.svg";
import Repensando from "../assets/static/icon2.svg";
import Bases from "../assets/static/icon3.svg";
import Seguridad from "../assets/static/icon4.svg";
import "../assets/styles/components/TopicContainer.css";

const TopicContainer = () => {
  return (
    <section className="temas">
      <TituloPodcast title="Algunos de nuestros temas" color />

      <div className="temas-n">
        <Topics title="Trabajo remoto" img={TrabajoRemoto} />
        <Topics title="Repensando la programación" img={Repensando} />
        <Topics title="Bases del código" img={Bases} />
        <Topics title="Seguridad informática" img={Seguridad} />
      </div>
    </section>
  );
};

export default TopicContainer;
