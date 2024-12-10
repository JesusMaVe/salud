import SectionOne from './sections/SectionOne'
// import SectionTwo from './sections/SectionTwo'
import SurveyPageUI from '../surveys/SurveyPageUI'
import './styles/AdminPageUI.css'

export default function AdminPageUI() {
    return (
        <>
            <SectionOne />
            <div style={{ width: '80%', height: '4rem' }}></div>
            <hr style={{justifySelf:'flex-start', width:'600px'}} />
            <h1>Ultimos rondines de entrevistas</h1>
            <h2>Resultados de las de entrevistas de salud laboral en las empresas participantes</h2>
            <SurveyPageUI />
        </>
    )
}