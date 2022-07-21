import React from "react"



export default function Flashcard ({question, index, answer}){

    const [showQuestion, setShowQuestion] = React.useState(false);











    return(
        <div className="flashcard">
            <p>Pergunta {index}</p>
            <div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>
    )
}

