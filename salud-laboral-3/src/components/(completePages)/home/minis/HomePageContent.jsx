import { Link } from 'react-router-dom'
import '../styles/HomePageUI.css'

export default function HomePageContent() {
    const domain = window.location.origin
    return (
        <div className="Home__contentContainer">
            <div className="Home__content">
                <div className="Home__contentItemOne">
                    <div className="Home__UI__blur">
                        <div className="Home__UI__blurc">
                            <div>
                                <h1>Profesores</h1>
                            </div>
                            <div>
                                <Link to={"/admin"} className="Home__btn">Acceder al panel administrativo</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home__contentItemTwo">
                    <div className="Home__UI__blur">
                        <div className="Home__UI__blurc">
                            <div>
                                <h1>Estudiantes</h1>
                            </div>
                            <div>
                                <a href={`${domain}/registrar-empleado`} className="Home__btn">Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}