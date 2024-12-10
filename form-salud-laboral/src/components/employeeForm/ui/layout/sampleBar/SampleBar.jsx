import ProfileOptions from '../../navigation/sidebar/ui/profileOptionsUI/ProfileOptions'
import './SampleBar.css'

export default function SampleBar({ userRole }) {
    return (
        <div className='Sample__modalContainer'>
            <div className='Sample__mainLy'>
                <ProfileOptions 
                    greet={'adios'}
                    role={userRole}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Numquam incidunt recusandae,
                    fugiat inventore beatae in voluptate corporis et rerum quae.
                    Facere deleniti accusantium autem ducimus aliquid,
                    delectus sit similique atque?
                </p>
            </div>
        </div>
    )
}
