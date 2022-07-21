import Home from "./Home";
import React from "react";
import PlayScreen from "./PlayScreen"


export default function App() {

  const [start, setStart] = React.useState(false);


  return (
    <>
    {/* {start ? (<PlayScreen />) : (<Home setStart={setStart}/>)} */}
    <div className="turned-flashcard">
            <p>Pergunta index</p>
            <img src="assets/setinha.png" alt="Turn Card Button"/>
        </div>
    </>
  );
}
