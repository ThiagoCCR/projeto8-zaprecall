import React from "react";
import FinalFlashcard from "./FinalFlashcard"
import turn from "../assets/img/setinha.png";

export default function Flashcard({ question, index, answer, footerState, setFooterState, setIsRed}) {

  const [flashState, setFlashState] = React.useState("initial");

  function changeFooter(value){
    setFlashState(value);
    let ion = "";
    if (value === "final-red"){
      ion = <ion-icon name="close-circle" class="md hydrated ion-red"></ion-icon>
      setIsRed(true);
    } else if (value === "final-orange"){
        ion = <ion-icon name="help-circle" class="md hydrated ion-orange"></ion-icon>
      }else{
      ion = <ion-icon name="checkmark-circle" class="md hydrated ion-green"></ion-icon>
    }
    setFooterState([...footerState, ion])
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
      <img onClick={() => setFlashState("answers")} src={turn} alt="Turn Card Button"/>
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

