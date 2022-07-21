import React from "react";

export default function Flashcard({ question, index, answer }) {
  const [flashState, setFlashState] = React.useState("initial");

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
      <img onClick={() => setFlashState("answers")} src="assets/setinha.png" alt="Turn Card Button" />
    </div>)
  } else if (flashState === "answers"){
    return (
    <div className="turned-flashcard">
        <p>{answer}</p>
        <div>
            <button className="answer-options red" onClick={() => setFlashState("final")} >Não Lembrei</button>
            <button className="answer-options orange" onClick={() => setFlashState("final")} >Quase não Lembrei</button>
            <button className="answer-options green" onClick={() => setFlashState("final")} >Zap!</button>
        </div>
    </div>
    )
  } else {
    return (
    <div className="flashcard">
        <p>Pergunta {index}</p>
        <div onClick={() => setFlashState("turned")}>
          <ion-icon name="play-outline"></ion-icon>
        </div>
    </div>)
  }
  
}

