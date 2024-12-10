import { redirect, useNavigate } from 'react-router-dom'
import PresentationHeader from '../../ui/headers/PresentationHeader'
import HeaderUI from './minis/HeaderUI'
import DividerLine from './minis/DividerLine'
import HomePageContent from './minis/HomePageContent'
import './styles/HomePageUI.css'


export default function HomePageUI() {
    const navigate = useNavigate()
    function navigateTo(path) {
        navigate(path)
    }

    return (
        <>
            <PresentationHeader />
            <HeaderUI />
            <DividerLine />
            <HomePageContent />
        </>
    )
}
