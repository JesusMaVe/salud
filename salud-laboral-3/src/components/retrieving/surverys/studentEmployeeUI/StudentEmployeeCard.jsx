import './StudentEmployeeCard.css'

export default function StudentEmployeeCard({ objeto }) {
    return (
        <div className="Prueba__card" >
            {
                objeto && (
                    <div className="Prueba__card__internalContainer">
                        <div style={{ display: 'grid', padding: '0 0 0 1rem' }}>
                            <div style={{ padding: '1rem 0 1.5rem 0' }}>
                                <span>Alumno dentro de grupo_id = {objeto['grupo_id']}</span>
                            </div>
                            <div className="Prueba__tags">
                                <span>CURP</span>
                                <strong>{objeto['curp']}</strong>
                            </div>
                        </div>
                        <div className="Prueba__card-header">
                            <div className="Prueba__title-container">
                                <div className="Prueba__title">{objeto['nombre']}</div>
                                <div className="Prueba__subtitle">{objeto['empresa_id']}</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}