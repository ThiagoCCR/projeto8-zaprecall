import logo from "../assets/img/image 1.png";

export default function Home({ setStart, setChosenDeck, chosenDeck }) {


  function startGame(){
    if(chosenDeck=== ""){
      return alert("Você tem que escolher um deck antes");
    } else {
      return setStart(true);
    }
  }


  return (
    <div className="main">
      <div className="container">
        <img src={logo} className="home-logo" alt="Home logo"></img>
        <h1>ZapRecall</h1>
        <select name="select" onChange={(e) => setChosenDeck(e.target.value)}>
          <option value="" disabled selected hidden>
            Escolha um Deck
          </option>
          <option value="React">React</option>
          <option value="Senhor dos Anéis">Senhor dos Anéis</option>
        </select>
        <button className="home-button" onClick={startGame}>
          Iniciar Recall!!
        </button>
      </div>
    </div>
  );
}
