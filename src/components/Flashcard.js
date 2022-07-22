import React from "react";
import FinalFlashcard from "./FinalFlashcard"
import turn from "../assets/img/setinha.png";

export default function Flashcard({ question, index, answer, footerState, setFooterState}) {

  const [flashState, setFlashState] = React.useState("initial");


  function changeFooter(value){
    setFlashState(value)
    setFooterState([...footerState, value])
    console.log(footerState)
  }


  if (flashState === "initial") {
    return (
    <div className="flashcard">
        <p>Pergunta {index}</p>
        <div onClick={() => setFlashState("turned")}>
          <ion-icon name="play-outline"></ion-icon>
        </div>
    </div>)
  } else if (flashState === "turned"){
    return (
    <div className="turned-flashcard">
      <p>{question}</p>
      <img onClick={() => setFlashState("answers")} src={turn} alt="Turn Card Button" />
    </div>)
  } else if (flashState === "answers"){
    return (
    <div className="turned-flashcard">
        <p>{answer}</p>
        <div>
            <button className="answer-options red" onClick={() => changeFooter("final-red")} >Não Lembrei</button>
            <button className="answer-options orange" onClick={() => changeFooter("final-orange")} >Quase não Lembrei</button>
            <button className="answer-options green" onClick={() => changeFooter("final-green")} >Zap!</button>
        </div>
    </div>
    )
  } else {
    return <FinalFlashcard  flashState={flashState} index = {index}/>
  }
  
}

