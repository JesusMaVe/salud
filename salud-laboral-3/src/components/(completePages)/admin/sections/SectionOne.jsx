import { Link } from 'react-router-dom'
import './Sections.css'

export default function SectionOne() {
    return (
        <div className="SectionOne__content">
            <div>
                <h1>Tareas iniciales</h1>
            </div>
            <div className="MobileDevice__hidden"></div>
            <div className="MobileDevice__hidden"></div>

            <div className="SectionOne__contentItemOne">
                <div className="a">
                    <h2>Ver empresas que han confirmado participación</h2>
                    <br />
                    <Link to={'/empresas'} className="SectionOne__btn">ver empresas alistadas</Link>
                </div>
            </div>
            <div className="SectionOne__contentItemTwo">
                <div className="a">
                    <h2>Generar contraseñas para estudiantes</h2>
                    <br />
                    <Link to={'/anadir-admin'} className="SectionOne__btn">ir al formulario</Link>
                </div>
            </div>
            <div className="SectionOne__contentItemTwo">
                <div className="a">
                    <h2>Crear grupos de estudiantes y asignarlos a una empresa</h2>
                    <br />
                    <Link to={'/anadir-grupos'} className="SectionOne__btn">agrupar estudiantes</Link>
                </div>
            </div>
        </div>
    )
}