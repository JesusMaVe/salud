import "./CardLayout.css"

export default function CardLayout({ children }) { 
    return (
        <div className="CardLy__lyCtn">
            <div className="CardLy__grid">
                {children}
            </div>
        </div>
    )
}
