import React from "react";
import HelloWorld from "./HelloWorld";
import Episodios from "./Episodios";
import We from "./We";
import Invitados from "./Invitados";
import Layout from "./Layout";
import Topics from "./Topics";
import TopicContainer from "./TopicContainer";
import News from "./News";

const App = () => (
  <Layout>
    <HelloWorld />
    <Episodios />
    <We />
    <Invitados />
    <Topics />
    <TopicContainer />
    <News />
  </Layout>
);

export default App;
