import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import {auth} from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email,password)
            .then (auth => {
                history.push('/') 
            })
            .catch(error=> alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                //it successfully create the user with email and password 
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            //anything wrong happens 
            .catch(error => alert (error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="Amazon Logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button type='submit' className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>
            
                <p>
                    By signing in you agree to this Amazon clone's Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookie Notice and our
                    Interest-Based Ads Notice
                </p>

                <button className="login_registerButton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
            
        </div>
    )
}

export default Login
