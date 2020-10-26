import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from './components/firebase'
import db from './components/firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './Reducer'


function Login() {

    const[state,dispatch]=useStateValue()

    const SignIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=> {
            
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error)=>alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Akash_rajoriya_Facebook_.png/180px-Akash_rajoriya_Facebook_.png"
                     alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                     alt=""/>
            </div>
            <Button type="submit" onClick={SignIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
