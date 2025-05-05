import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth , provider} from '../firebase-config.js'
import Cookies from 'universal-cookie'
const cookies =  new Cookies()

const Auth = () => {

    try {
        const signInWithGoogle = async () => {
            const result = await signInWithPopup(auth, provider)
            cookies.set('auth-token', result.user.refreshToken)
        }
    } catch (error) {
        console.log(error);
    }

  return (
    <div className='auth'>
        <p> Sign in With Google to continue </p>
        <button onClick={signInWithGoogle}> Sign in With Google </button>
    </div>
  )
}

export default Auth