import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login-on.css';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext, signInWithGoogle } from '../hooks/useAuthContext';

const Login = () => {

    const {user} = useAuthContext()
    const [email, setEmail] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('');
    const { login, isPendingLogin, errorLogin } = useLogin()

    const handleSubmit=(e)=>{
        e.preventDefault();
        login(email, passwordLogin);
    }

    const styl1={
        margin: '0',
        color: 'rgb(158, 157, 157)',
        font:"600 16px/18px 'Open Sans', sans-serif"
    }

    return (
        <form style={styl1} method="post" action="node.js" onSubmit={handleSubmit}>
        <div className="login-wrap">
                <div id="back">
                    <Link to="/"><img src="../img/arrow-left-solid.svg" alt="arrow" /></Link>
                </div>
            <div className="login-html">
                <div id="top-logo">
                    <img src="../img/final-icon-light.svg" alt="logo RIGOLAZ" />
                </div>
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">S'identifier</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab"></label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="lab">Identifiant</label>
                            <input type="text" className="input" value={email} onChange={ (e)=>{setEmail(e.target.value)}} name='identifiant'/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Mot de passe</label>
                            <input id="pass" type="password" className="input" value={passwordLogin} onChange={(e)=>{setPasswordLogin(e.target.value)}} name='password' data-type="password"/>
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check"/>
                            <label htmlFor="check"><span className="icon"></span> Se souvenir</label>
                        </div>
                        <div className="group">
                        {!isPendingLogin && <input type="submit" className="button" value="Se connecter"/>}
                        { isPendingLogin && <input type="submit" className="button" value="Loading..."/>}
                        { errorLogin && <p>{errorLogin}</p> }
                        
                        </div>
                        <div className="foot-lnk">
                            <Link to="#forgot">Mot de passe oublié?</Link>
                        </div>
                        <div className="hr"></div>
                        <div className='alt-login'>
                            <p>Connexion alternative</p>
                            <Link to="https://www.google.com/accounts/Login?hl=fr"><img src="../img/google.svg" alt="logo GOOGLE" /></Link>
                            <Link to="http://www.rigo.cm"><img src="../img/facebook_button.svg" alt="logo GOOGLE" /></Link>
                            <Link to="http://www.rigo.cm"><img src="../img/linkedin.svg" alt="logo GOOGLE" /></Link>
                        </div>
                        <div className="hr"></div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
};

export default Login;
