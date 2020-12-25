import React from "react";
import "../assets/styles/components/HelloWorld.css";
import ButtonPodcast from "./ButtonPodcast";

const HelloWorld = () => (
  <div className="HelloWorld">
    <h1 className="HelloWorld__title">
      Hello <span>world</span> pale blue dot<span>.</span>
    </h1>
    <p className="HelloWorld__text">
      El portal de podcasts que explora el mundo de la programación y la
      tecnología. Nuevos episodios, todos los jueves cada 15 días.
    </p>
    <ButtonPodcast title="conocé más" url="#" />
  </div>
);

export default HelloWorld;
