import { useState } from "react";
import SampleBar from '../sampleBar/SampleBar'
import MainHeader from '../../../ui/headers/MainHeader'
import './BarAndContainer.css'


export default function BarAndContainer({ children }) {
	const [isModalOpen, setModalToOpen] = useState(false);

    return (
        <>
            <SampleBar userRole={'lol'} />
            <MainHeader isModalOpen={isModalOpen} setModalToOpen={setModalToOpen} />
            <div className='Admin__globalContainer'>
                <div className='Admin__contentContainer'>
                    {children}
                </div>
            </div>
        </>
    )
}