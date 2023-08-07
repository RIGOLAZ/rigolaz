import React, { useState } from 'react';
import '../css/auth.css';
import { Link } from 'react-router-dom';
import '../css/login-on.css';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';

const Regis2 = () => {

    const {user} = useAuthContext()
    const [emailSignup, setEmailSignup] = useState('')
    const [password, setPasswordSignup] = useState('');
    const { login, isPendingSignup, errorSignup } = useLogin()

    const handleSubmit=(e)=>{
        e.preventDefault();
        login(emailSignup, password);
    }
    return (
        <div>
            
            <form action="" method='post' onSubmit={handleSubmit}>
            <div className="login-wrap">
	<div className="login-html">
                <div id="back">
                    <Link to="/"><img src="../img/arrow-left-solid.svg" alt="arrow" /></Link>
                </div>
                <div id="top-logo">
                    <img src="../img/final-icon-light.svg" alt="logo RIGOLAZ" />
                </div>
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                <label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
			    <div className="sign-in-htm">
				<div className="group">
					<label htmlFor="pass" className="label">Email Address</label>
					<input type="email" className="input" value={emailSignup} onChange={(e)=>{setEmailSignup(e.target.value)}} name='identifiant'/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Mot de passe</label>
					<input id="pass" type="password" className="input" value={password} onChange={(e)=>{setPasswordSignup(e.target.value)}} name='password' data-type="password"/>
				</div>
				<div className="group">
                    <input type="checkbox" name="check" id="choice"/>
					<label htmlFor="choice"> Mémoriser</label>
                    
				</div>
				<div className="group">
                {!isPendingSignup && <input type="submit" className="button" value="Se connecter"/>}
                        { isPendingSignup && <input type="submit" className="button" value="Loading..."></input>}
						{ errorSignup && <p>{errorSignup}</p> }
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<Link to="*">Mot de passe oublié?</Link>
				</div>
                <div className="hr"></div>
                <div className='alt-login'>
                            <p>Connexions alternatives</p>
                            <Link to="https://www.google.com/accounts/Login?hl=fr"><img src="../img/google.svg" alt="logo GOOGLE" /></Link>
                            <Link to="http://www.rigo.cm"><img src="../img/facebook_button.svg" alt="logo GOOGLE" /></Link>
                            <Link to="http://www.rigo.cm"><img src="../img/linkedin.svg" alt="logo GOOGLE" /></Link>
                        </div>
                        <div className="hr"></div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label htmlFor="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Déjà membre?</label>
				</div>
			</div>
		</div>
	</div>
</div>
            </form>
        </div>
    );
};

export default Regis2;