import logop from "../assets/img/image 2.png";


export default function Header (){

    return (
        <div className="header">
        <img
          src={logop}
          className="play-screen-logo"
          alt="PlayScreen logo logo"
        ></img>
        <h1>ZapRecall</h1>
      </div>
    )


}