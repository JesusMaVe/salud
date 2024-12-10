// import { useEffect, useState } from 'react'
// import { useScoreFormatStore } from '../../../lib/(zustand)/formStore'

import ParteInicial from '../Forms/ParteInicial'
import ParteMedia from '../Forms/ParteMedia'
import ParteFinal from '../Forms/ParteFinal'
import DefaultStep from './DefaultStep'
import { NOMBRE_SECCION } from '../../../lib/(ENTITIES_ENUMS)/extenseForm/enum'

import {
  Preguntas1,
  Preguntas2,
  Preguntas3,
  Preguntas4,
  Preguntas5,
  Preguntas6,
  Preguntas7,
  Preguntas8,
  Preguntas9,
  Preguntas10,
  Preguntas11,
  Preguntas12,
  Preguntas13
} from '../../../textos/preguntas'
const Final_Survey_Templates = [
  {
    jsx: Preguntas1,
    title: 'ejemplo 1',
    sectionId: 'NO_NEEDED',
    sectionKey: 'section1',
    previousSectionKey: 'NO_NEEDED',
  },
  {
    jsx: Preguntas2,
    title: 'ejemplo 2',
    sectionId: NOMBRE_SECCION.CONDICIONES_LABORALES,
    sectionKey: 'section2',
    previousSectionKey: 'section1',
  },
  {
    jsx: Preguntas3,
    title: 'ejemplo 3',
    sectionId: NOMBRE_SECCION.FACTORES_FAMILIARES,
    sectionKey: 'section3',
    previousSectionKey: 'section2',
  },
  {
    jsx: Preguntas4,
    title: 'ejemplo 4',
    sectionId: NOMBRE_SECCION.FACTORES_SOCIOCULTURALES,
    sectionKey: 'section4',
    previousSectionKey: 'section3',
  },
  {
    jsx: Preguntas5,
    title: 'ejemplo 5',
    sectionId: NOMBRE_SECCION.SALUD_GENERAL,
    sectionKey: 'section5',
    previousSectionKey: 'section4',
  },
  {
    jsx: Preguntas6,
    title: 'ejemplo 6',
    sectionId: NOMBRE_SECCION.AUTOCUIDADO_UNIVERSAL,
    sectionKey: 'section6',
    previousSectionKey: 'section5',
  },
  {
    jsx: Preguntas7,
    title: 'ejemplo 7',
    sectionId: NOMBRE_SECCION.SALUD_CARDIOVASCULAR,
    sectionKey: 'section7',
    previousSectionKey: 'section6',
  },
  {
    jsx: Preguntas8,
    title: 'ejemplo 8',
    sectionId: NOMBRE_SECCION.NUTRICION,
    sectionKey: 'section8',
    previousSectionKey: 'section7',
  },
  {
    jsx: Preguntas9,
    title: 'ejemplo 9',
    sectionId: NOMBRE_SECCION.ESTILO_DE_VIDA,
    sectionKey: 'section9',
    previousSectionKey: 'section8',
  },
  {
    jsx: Preguntas10,
    title: 'ejemplo 10',
    sectionId: NOMBRE_SECCION.SALUD_AUDIOVISUAL,
    sectionKey: 'section10',
    previousSectionKey: 'section9',
  },
  {
    jsx: Preguntas11,
    title: 'ejemplo 11',
    sectionId: NOMBRE_SECCION.PREVENCION_DE_RIESGOS,
    sectionKey: 'section11',
    previousSectionKey: 'section10',
  },
  {
    jsx: Preguntas12,
    title: 'ejemplo 12',
    sectionId: NOMBRE_SECCION.FACTORES_AMBIENTALES,
    sectionKey: 'section12',
    previousSectionKey: 'section11',
  },
  {
    jsx: Preguntas13,
    title: 'ejemplo 13',
    sectionId: NOMBRE_SECCION.PROMOCION_HUMANA,
    sectionKey: 'section13',
    previousSectionKey: 'section12',
  }
]

export default function FormSteps({ step, setStep }) {
  return (
    <>
      {
        step === 0 ? (
          <ParteInicial
            step={step}
            setStep={setStep}
          />
        ) : (step > 0 && step < 12) ? (
          <ParteMedia
            surveyTemplate={Final_Survey_Templates[step].jsx}
            sectionTitle={Final_Survey_Templates[step].title}
            sectionId={Final_Survey_Templates[step].sectionId}
            previousSectionKey={Final_Survey_Templates[step].previousSectionKey}
            sectionKey={Final_Survey_Templates[step].sectionKey}
            step={step}
            setStep={setStep}
          />
        ) : step === 12 ? (
          <ParteFinal
            surveyTemplate={Final_Survey_Templates[step].jsx}
            sectionTitle={Final_Survey_Templates[step].title}
            sectionId={Final_Survey_Templates[step].sectionId}
            previousSectionKey={Final_Survey_Templates[step].previousSectionKey}
            sectionKey={Final_Survey_Templates[step].sectionKey}
            step={step}
            setStep={setStep}
          />
        ) : <DefaultStep />
      }
    </>
  )
}