import MessageFooter from "./MessageFooter"

export default function Footer ({footerState}){

    return (
        <div className="footer">
            <MessageFooter footerState={footerState} />
            <p>{footerState.length}/4 Concluidos</p>
            <div>
                {footerState.map((value)=>value)}            
            </div>
        </div>
    )
}