import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";
 


export default function MessageFooter({footerState, isRed}){

    console.log(footerState.length)
    console.log(isRed)

    if (footerState.length === 4 && isRed === false){
        return (
            <>
            <div>
                <img src={party} alt="Img party"/>
                <p>Parabéns!</p>
            </div>
            <div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
            </>
        )
    } else if (footerState.length === 4 && isRed === true){
        return (
            <>
            <div>
                <img src={sad} alt="Img sad"/>
                <p>Putz...</p>
            </div>
            <div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>
            </>
        )
    } else {
        return(<><p>aa</p></>)
    }


}