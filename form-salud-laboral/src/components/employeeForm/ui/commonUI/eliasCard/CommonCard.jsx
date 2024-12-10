import './CommonCard.css'

export default function CommonCard({ onCardClick=()=>{}, children }) {
    return (
        <div className="Elias__CommonCard__card" onClick={onCardClick}>
            {children}
        </div>
    )
}