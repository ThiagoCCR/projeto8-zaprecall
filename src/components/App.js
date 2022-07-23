import Home from "./Home";
import React from "react";
import PlayScreen from "./PlayScreen"


export default function App() {

  const [start, setStart] = React.useState(false);

  const [chosenDeck, setChosenDeck] = React.useState("Senhor dos Anéis");


  return (
    <>
    {start ? (<PlayScreen setStart={setStart} chosenDeck={chosenDeck}/>) : (<Home setStart={setStart} setChosenDeck= {setChosenDeck}/>)}
    </>
  );
}
