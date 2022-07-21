export default function Home ({setStart}){

return (
        <div className="main">
            <div className="container">
                <img src="assets/image 1.png" className="home-logo" alt="Home logo"></img>
                <h1>ZapRecall</h1>
                <button className="home-button" onClick={()=>setStart(true)}>Iniciar Recall!!</button>
            </div>
       </div>
)

}