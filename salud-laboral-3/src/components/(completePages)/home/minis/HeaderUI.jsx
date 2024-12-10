import '../styles/HomePageUI.css'

export default function HeaderUI() {
    return (
        <div className="Home__header">
            <div className="Home__headerChild">
                <div className="Home__headerChild_title">
                    <div>
                        <h1 className="UAA__colorAzul">Sistema de manejo de la salud laboral</h1>
                    </div>
                </div>
                <div className="Home__headerChild_img">
                    <img src="/img/dos-logotipos.png" alt="centro de ciencias de la salud UAA" />
                </div>
            </div>
        </div>
    )
}
