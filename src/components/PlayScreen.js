import Header from "./Header";
import Footer from "./Footer";
import Flashcard from "./Flashcard";
import React from "react";


const allCards = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
    state: "initial"
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
    state: "initial"
  },
  { question: "Componentes devem iniciar com __", answer: "letra maiúscula", state: "initial" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões", state: "initial" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
    state: "initial"
  },
  {
    question: " Usamos o npm para __ ",
    answer: " gerenciar os pacotes necessários e suas dependências",
    state: "initial"
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
    state: "initial"
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    state: "initial"
  },
];

export default function PlayScreen() {

  const sortedDeck = [...allCards].sort(shuffle);

  const usedDeck = [sortedDeck[0], sortedDeck[1], sortedDeck[2], sortedDeck[3]];

  const [footerState, setFooterState] = React.useState([]);

  function shuffle() {
    return Math.random() - 0.5;
  }

  return (
    <div>
      <Header />
      <div className="container">
        {usedDeck.map((flash, index) => <Flashcard key={index} question={flash.question} index={index+1} answer={flash.answer} footerState ={footerState} setFooterState = {setFooterState}/>)}
      </div>
      <Footer footerState={footerState}/>
    </div>
  );
}
