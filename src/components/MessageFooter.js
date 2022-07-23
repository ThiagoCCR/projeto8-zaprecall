import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";
 


export default function MessageFooter({footerState, isRed}){


    if (footerState.length === 4 && isRed === false){
        return (
            <>
            <div className="footer-title">
                <img src={party} alt="Img party"/>
                <p><strong>Parabéns!</strong></p>
            </div>
            <div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
            </>
        )
    } else if (footerState.length === 4 && isRed === true){
        return (
            <>
            <div className="footer-title">
                <img src={sad} alt="Img sad"/>
                <p><strong>Putz...</strong></p>
            </div>
            <div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>
            </>
        )
    } else {
        return(<></>)
    }


}