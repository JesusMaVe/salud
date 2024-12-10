import ProfileOptions from '../../navigation/sidebar/ui/profileOptionsUI/ProfileOptions'
import './SampleBar.css'
import { Link } from 'react-router-dom';

export default function SampleBar({ userRole }) {
    return (
        <div className='Sample__modalContainer'>
            <div className='Sample__mainLy'>
                <div className="SNavbar__header">
                    <ProfileOptions
                        greet={'adios'}
                        role={userRole}
                    />
                </div>
                <div className="SNavbar__body">
                    <ul>
                        <li>
                            <Link to={'/encuestas'}>Encuestas</Link>
                        </li>
                        <li>
                            <Link to={'/encuestas'}>Encuestas</Link>
                        </li>
                        <li>
                            <Link to={'/encuestas'}>Encuestas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
