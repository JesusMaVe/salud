import './GroupCard.css'

export default function GroupCard({ objeto }) {
    return (
        <div className="Prueba__card" >
            {
                objeto && (
                    <div className="Prueba__card__internalContainer">
                        <div style={{ display: 'grid', padding: '0 0 0 1rem' }}>
                            <div style={{ padding: '1rem 0 1.5rem 0' }}>
                                <span>Rondín atendido por</span>
                            </div>
                            <div className="Prueba__tags">
                                <span>Id de grupo</span>
                                <strong>{objeto['grupo_id']}</strong>
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