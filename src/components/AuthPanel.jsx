import React, { useState } from 'react';
import '../css/auth.css';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useSignup } from '../hooks/useSignup';
// import socialMediaAuth from '../service/socialMediaAuth';
// import { googleProvider } from '../firebase/authMethods';
// import Google from './buttons/Google';
// import Facebook from './buttons/Facebook';
// import Twitter from './buttons/Twitter';
// import LinkedIn from './buttons/LinkedIn';

const AuthPanel = () => {
    // const {user} = useAuthContext();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const { login, isPendingLogin, errorLogin } = useLogin()

    const [emailSignup, setEmailSignup] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');
    const [userNameSignup, setuserNameSignup] = useState('');
    const { signup, isPendingSignup, errorSignup } = useSignup();

    const handleSubmitLogin=(e)=>{
        e.preventDefault();
        login(emailLogin, passwordLogin);
    }

    const handleSubmitSignup = (e) => {
        e.preventDefault()
        signup(emailSignup, passwordSignup, userNameSignup)
    }

    const handleClick =(e)=>{
        setEmailSignup('');
        setPasswordSignup('');
        setuserNameSignup('');
        setEmailLogin('');
        setPasswordLogin('');
    }
    /* const handleClickSocial = async (e, provider) =>{
        e.preventDefault();
        const res = await socialMediaAuth(provider);
        console.log(res);
    } */

    console.log("Email Login saisi:" + emailLogin + 
    "\nMot de passe Login saisi:" + passwordLogin +
    "\nNom d'utilisateur signup saisi:" + userNameSignup +
    "\nAdresse mail signup saisie:"+ emailSignup +
    "\nMot de passe Signup saisi:" + passwordSignup +
    '\nValeur de is PendingLogin:' + isPendingLogin +
    '\nValeur de isPendingSignup:' + isPendingSignup);
    return (
        <div className='formPanel'>
            <div className="mainpanel">
                <div id="backLogin">
                    <Link to="/"><img src="../img/arrow-left-solid.svg" alt="arrow" /></Link>
                </div>
                <div id="crossLogin">
                    <Link to="/"><img src="../img/close_white_24dp.svg" alt="cross" /></Link>
                </div>
		<input className='putting' type="checkbox" id="chk" aria-hidden="true"/>
			<div className="login">
            <form action="" method='post' onSubmit={handleSubmitLogin}>
                <span id="top-logo"><img src="../img/final-icon-light.svg" alt="logo RIGOLAZ" /></span>
				<label htmlFor="chk" className='zap'  aria-hidden="true" onClick={handleClick}>SE CONNECTER</label>
                { errorLogin && <p style={{textAlign:'center',fontSize:'12px',color:'red'}}>{errorLogin}</p> }
                <input type="email" className="putting" value={emailLogin} onChange={(e)=>{setEmailLogin(e.target.value)}} name='identifiant' placeholder='Email'/>
				<input id="pass" type="password" className="putting" value={passwordLogin} onChange={(e)=>{setPasswordLogin(e.target.value)}} name='password' data-type="password" placeholder='Mot de passe'/>
                {!isPendingLogin && <button className="subForm">Se connecter</button>}
                {isPendingLogin && <button className="subForm">Connecting...</button>}
			</form>
            <div className="altLogin">
			<h5 style= {{textAlign:"center",color:"white"}}>------ Alternative ------</h5>
            <button /* onClick={handleClickSocial(facebookProvider)} */ class="social-button" id="facebook-connect"><span>Facebook</span></button>
            <button /*onClick= {handleClickSocial(googleProvider)} */ class="social-button" id="google-connect"><span>Google</span></button>
            <button /* onClick={handleClickSocial(twitterProvider)} */ class="social-button" id="twitter-connect"><span>Twitter</span></button>
            <button /* onClick={handleClickSocial(linkedInProvider)} */ class="social-button" id="linkedin-connect"><span>LinkedIn</span></button>
            {/* <button onClick={handleClickSocial(githubProvider)} class="social-button" id="google-connect"><span>GIthub</span></button> */}
			{/* <Facebook />
            <Google />
			<Twitter />
			<LinkedIn /> */}
		    </div>
            </div>
			<form className="signup" action="" method='post' onSubmit={handleSubmitSignup}>
				<label htmlFor="chk" className='zap'  aria-hidden="true" onClick={handleClick}>S'ENREGISTRER</label>
                <input className='putting' type="text" name="username" onChange={(e) => setuserNameSignup(e.target.value)} value={userNameSignup} placeholder="Nom d'utilisateur" required=""/>
				<input className='putting' type="email" name="email" onChange={(e) => setEmailSignup(e.target.value)} value={emailSignup} placeholder="Email" required=""/>
				<input className='putting' type="password" name="pswd" onChange={(e) => setPasswordSignup(e.target.value)} value={passwordSignup} placeholder="Mot de passe" required=""/>
                {!isPendingSignup && <button className="subForm">S'enregistrer</button> }
                {isPendingSignup && <button className="subForm">Loading...</button> }
                {errorSignup && <p style={{textAlign:'center',fontSize:'12px',color:'red'}}>{errorSignup}</p> }
                <label htmlFor="chk" className='zap'  aria-hidden="true" onClick={handleClick}>Déja membre?</label>
            </form>
        </div>
    </div>
    );
};

export default AuthPanel;