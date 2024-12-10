import { useState } from 'react'
import './Accordion.css'

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    )
}