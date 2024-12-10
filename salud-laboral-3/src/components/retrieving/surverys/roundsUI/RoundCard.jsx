import './RoundCard.css'

export default function RoundCard({ nombre, direccion, empresa_id, num_participantes }) {
    return (
        < div className="Prueba__card" >
            <div className="Prueba__card__internalContainer">
                <div className="Prueba__card-header">
                    <div className="Prueba__title-container">
                        <div className="Prueba__title">{nombre}</div>
                        <div className="Prueba__subtitle">{direccion}</div>
                    </div>
                    <div className="Prueba__title-container">
                        <div className="Prueba__subtitle">{"06-DIC-2024"}</div>
                    </div>
                </div>
                <div style={{ display: 'grid', padding: '0 0 0 1rem' }}>
                    <div style={{ padding: '1rem 0 1.5rem 0' }}>
                        <span>Dirección de le empresa{": \""}{direccion}{"\""}</span>
                    </div>
                    <div className="Prueba__tags">
                        <span>Id de empresa</span>
                        <strong>{empresa_id}</strong>
                    </div>
                    <div className="Prueba__tags">
                        <span>No. participantes</span>
                        <strong>{num_participantes}</strong>
                    </div>
                </div>
            </div>
        </div >
    )
}