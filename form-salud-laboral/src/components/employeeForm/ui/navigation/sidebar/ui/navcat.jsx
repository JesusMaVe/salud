import { Link } from 'react-router-dom';
import '../styles/navbar.css'

export default function Navcat(
  { titulo, href, handleToggle, toggleParam, openSubmenus={}, children }
) {
  return (
    <ul className="Navbar__nav-list">
      <li
      onClick={() => {
        handleToggle(toggleParam);
      }}
      >
        <Link to={href}>
          <ion-icon name='people-outline'></ion-icon>
          <span>{titulo}</span>
          {
            openSubmenus[toggleParam] ? 
            <ion-icon name="chevron-up-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>
          }
        </Link>
        <div 
          style={{
            maxHeight: openSubmenus[toggleParam] ? '200px' : '0px',
            overflow: 'hidden',
            opacity: openSubmenus[toggleParam] ? 1 : 0,
            transition: 'max-height 0.3s ease, opacity 0.3s ease'
          }}
        >
          {children}
        </div>
      </li>
    </ul>
  );
}
