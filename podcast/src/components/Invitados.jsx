import React from "react";
import "../assets/styles/components/Invitados.css";
import TituloPodcast from "../components/TituloPodcast";
import Grace from "../assets/static/grace-hopper.png";
import KatieBouman from "../assets/static/Katie-Bouman.png";
import MargaretHamilton from "../assets/static/Margaret_Hamilton.png";
import Computer1950 from "../assets/static/An_E.R.A.Univac_1103_computer_in_the_1950s.png";
import ComputerOpe from "../assets/static/Computer_operators_with_an_Eniac—the_world’s_first_programmable_general-purpose_computer.png";
import Susankare from "../assets/static/susan-kare.png";

const Invitados = () => {
  return (
    <section className="entrevista">
      <TituloPodcast title="Invitadas/os estelares" color />
      <div className="galeria-ent">
        <img src={Grace} alt="Grace" />
        <img src={KatieBouman} alt="Katie" />
        <img src={MargaretHamilton} alt="Margaret" />
        <img src={Computer1950} alt="Compunter in the 1950s" />
        <img src={ComputerOpe} alt="Computer Operarions" />
        <img src={Susankare} alt="Susan" />
      </div>
    </section>
  );
};

export default Invitados;
