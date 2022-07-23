import MessageFooter from "./MessageFooter";

export default function Footer({ footerState, isRed, setStart}) {
  if (footerState.length === 4) {
    return (
      <div className="footer-big">
        <div className="final-message-footer">
          <MessageFooter footerState={footerState} isRed={isRed} />
        </div>
        <div>
          <p>{footerState.length}/4 CONCLUÍDOS</p>
          <div>{footerState.map((value) => value)}</div>
        </div>
        <button onClick={()=>setStart(false)}>Reiniciar Recall</button>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <MessageFooter footerState={footerState} />
        <p>{footerState.length}/4 Concluidos</p>
        <div>{footerState.map((value) => value)}</div>
      </div>
    );
  }
}
