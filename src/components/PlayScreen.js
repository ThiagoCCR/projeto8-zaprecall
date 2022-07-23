import Header from "./Header";
import Footer from "./Footer";
import Flashcard from "./Flashcard";
import React from "react";

const allCards = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
  },
  { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: " Usamos o npm para __ ",
    answer: " gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function PlayScreen({setStart}) {
  const sortedDeck = [...allCards].sort(shuffle);

  const usedDeck = [sortedDeck[0], sortedDeck[1], sortedDeck[2], sortedDeck[3]];

  const [footerState, setFooterState] = React.useState([]);

  const [isRed, setIsRed] = React.useState(false);

  function shuffle() {
    return Math.random() - 0.5;
  }

  return (
    <div>
      <Header />
      <div className="container">
        {usedDeck.map((flash, index) => (
          <Flashcard
            key={index}
            question={flash.question}
            index={index + 1}
            answer={flash.answer}
            footerState={footerState}
            setFooterState={setFooterState}
            setIsRed = {setIsRed}
          />
        ))}
      </div>
      <Footer footerState={footerState} isRed={isRed} setStart={setStart}/>
    </div>
  );
}
