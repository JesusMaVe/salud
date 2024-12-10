import { useState } from 'react'
import { main_cat } from '../../../../../../lib/utils/(infoForNavbarUI)/items'
import { sub_cat } from '../../../../../../lib/utils/(infoForNavbarUI)/items'
import Navcat from '../ui/navcat'
import Subcat from '../ui/subcat'
import '../styles/navbar.css'


export default function LogicNavcat() {
    const [openSubmenus, setOpenSubmenus] = useState({})
    const handleSubmenuToggle = (submenuKey) => {
        setOpenSubmenus(
            (prevSubmenus) => {
                const newSubmenus = { ...prevSubmenus }
                const level = submenuKey.split('.').length
                const parentKey = submenuKey.split('.').slice(0, -1).join('.')
                Object.keys(newSubmenus).forEach((key) => {
                    const keyLevel = key.split('.').length
                    const keyParent = key.split('.').slice(0, -1).join('.')
                    if(key !== submenuKey) {
                        if(keyLevel === level && keyParent === parentKey) {
                            newSubmenus[key] = false
                        }
                    }
                })
                newSubmenus[submenuKey] = !newSubmenus[submenuKey]
                return newSubmenus
            }
        )
    }

    return (
        <div className="Navbar__nav-sections">
            <div className="Navbar__nav-title">Navigation</div>
            {
                main_cat.map((item, i) => (
                    <Navcat
                        titulo={item.titulo}
                        href={item.href}
                        handleToggle={handleSubmenuToggle}
                        toggleParam={item.id}
                        openSubmenus={openSubmenus}
                        key={i}
                    >
                        {
                            sub_cat.filter(item => item.id === i).map((item, j) => (
                                <Subcat
                                    titulo={item.titulo}
                                    href={item.href}
                                    iconName={item.iconName}
                                    key={j}
                                />
                            ))
                        }
                    </Navcat>
                ))
            }
        </div>
    )
}