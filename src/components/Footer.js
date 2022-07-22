export default function Footer ({footerState}){


    return (
        <div className="footer">
            <p>{footerState.length}/4 Concluidos</p>
            <div>
                {footerState.map((value)=>value)}            
            </div>
        </div>
    )
}