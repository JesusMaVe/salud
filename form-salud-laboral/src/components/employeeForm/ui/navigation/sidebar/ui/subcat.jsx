import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css'

export default function Subcat({ titulo, href, iconName }) {
  const navigate = useNavigate();

  return (
    <li>
      <Link to={href}>
        <ion-icon name={iconName} style={{fontSize: '1em',color:'#333'}}></ion-icon>
        <span style={{color: '#666'}}>
          {titulo}
        </span>
      </Link>
    </li>
  )
}
