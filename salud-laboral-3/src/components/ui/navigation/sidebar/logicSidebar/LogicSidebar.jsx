import "../styles/sideNavbar.css";

export default function LogicSidebar({ activeClassName, setModalToOpen, children }) {
  return (
    <div className={activeClassName}>
      <div className="SNavbar__mainLy">
        <div className="SNavbar__header">
          <div></div>
          <span className="SNavbar__closeBtn" onClick={() => setModalToOpen(false)}>cerrar</span>
        </div>
        <div className="SNavbar__body">
          {children}
        </div>
        {/* end of modal body and header */}

      </div>
    </div>
  )
}
