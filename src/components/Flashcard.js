import React from "react";

export default function Flashcard({ question, index, answer }) {
  const [showQuestion, setShowQuestion] = React.useState(false);

  return showQuestion ? (
    <div className="turned-flashcard">
      <p>{question}</p>
      <img src="assets/setinha.png" alt="Turn Card Button" />
    </div>
  ) : (
    <div className="flashcard">
      <p>Pergunta {index}</p>
      <div onClick={() => setShowQuestion(true)}>
        <ion-icon name="play-outline"></ion-icon>
      </div>
    </div>
  );
}
