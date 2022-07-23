import Header from "./Header";
import Footer from "./Footer";
import Flashcard from "./Flashcard";
import React from "react";

const allDecks = [
  {
    name: "React",
    deck: [
      {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
      },
      {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
      },
      {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
      },
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
    ],
  },
  {
    name: "Senhor dos Anéis",
    deck: [
      {
        question: "Quem era o portador do Um Anel?",
        answer: "Frodo Bolseiro"
      },
      {
        question: "Quantos membros tinha a Sociedade do Anel?",
        answer: "9 membros"
      },
      {
        question: "Quantos anéis de poder foram dados aos anões?",
        answer: "7 anéis"
      },
      {
        question:
          "Qual era o nome da ordem a que Gandalf e Saruman pertenciam?",
        answer: "Istari, a ordem dos Magos"
      },
      {
        question: "Qual o nome da espada de Aragorn",
        answer: "Andúril, a chama do ocidente"
      },
      {
        question: "Qual anel de poder Gandalf possuía?",
        answer: "Narya, o anel de fogo"
      },
      {
        question: "Qual o nome do Senhor do Escuro",
        answer: "Sauron, o Inimigo"
      },
      {
        question: "Onde o Um anel foi destruído?",
        answer: "Orodruin"
      },
    ],
  },
];

function shuffle() {
  return Math.random() - 0.5;
}

export default function PlayScreen({ setStart, chosenDeck }) {

  const [usedDeck, setUsedDeck] = React.useState([])

  const [footerState, setFooterState] = React.useState([]);

  const [isRed, setIsRed] = React.useState(false);

  React.useEffect(()=>{
      for (let i =0; i < allDecks.length; i++){
        if (allDecks[i].name === chosenDeck){
          const selectedDeck = [...allDecks[i].deck];
          const sortedDeck = [...selectedDeck].sort(shuffle);
          let usedDeck = [sortedDeck[0], sortedDeck[1], sortedDeck[2], sortedDeck[3]];
          setUsedDeck(usedDeck);
        }
      }
  }, [chosenDeck]);

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
            setIsRed={setIsRed}
          />
        ))}
      </div>
      <Footer footerState={footerState} isRed={isRed} setStart={setStart} />
    </div>
  );
}
