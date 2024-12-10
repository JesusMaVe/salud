import { useContext, useState, useEffect } from 'react'
// import { redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { LayerOneAuthContext } from "../../../redux/slices/auth/layerOne/LayerOneAuthContext"
// import LoadingAuthUI from '../../../components/ui/helpers/LoadingAuthUI'
// import AuthErrorUI from '../../../components/ui/helpers/AuthErrorUI'
import SignUpForm from '../../../components/auth/signup/logic/SignUpForm'


export default function SignUpPage() {
    return (
        <SignUpForm />
    )

}