export default function FinalFlashcard({flashState ,index }) {
  
    if (flashState === "final-red"){
        return (
            <div className="flashcard">
              <p className="italic ion-red">Pergunta {index}</p>
              <div>
              <ion-icon name="close-circle" class="md hydrated ion-red"></ion-icon>
              </div>
            </div>
          );
    } else if (flashState === "final-orange"){
        return (
            <div className="flashcard">
              <p className="italic ion-orange">Pergunta {index}</p>
              <div>
                <ion-icon name="help-circle" class="md hydrated ion-orange"></ion-icon>
              </div>
            </div>
          );
    } else {
        return (
            <div className="flashcard">
              <p className="italic ion-green">Pergunta {index}</p>
              <div>
                <ion-icon name="checkmark-circle" class="md hydrated ion-green"></ion-icon>
              </div>
            </div>
          );
    }
  
   
}
