import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {useLogout} from '../hooks/useLogout'

const Sidebar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <>
            <input type="checkbox" id="check"/>
<label htmlFor="check">
    <img src="../img/bars.svg" alt="open-bar" id="btn"/>
    <img src="../img/times.svg" alt="close" id="cancel"/>
</label>
<div className="sidebar">
    <header>
        <ul>
            <li>
                {!user && <Link to="/auth" id="side-login">
                    <img id="top-img" src="../img/logo-fond-blanc.svg" alt="logo RIGOLAZ" />Déconnecté!<br/><span id="connect">Se connecter?<img src="../img/login-arrow.svg" alt="log" /></span>
                </Link>}
                {user && <span style={{color:'#00FF00'}} to="*" id="side-login">
                    <img id="top-img" src="../img/logo-fond-blanc.svg" alt="logo RIGOLAZ" />CONNECTE!<br/><span id="connect">Bienvenue!</span>
                </span>}
            </li>
        </ul>
    </header>
    <div className="menu">
        <ul>
            {user && <li>
                <Link to="#" className="active">
                    <img src="../img/manage_accounts.svg" alt="account"/>
                    <span>COMPTE</span>
                </Link>
            </li>}
            <li>
                <Link to="/notifications">
                    <img src="../img/message.svg" alt="notification"/>
                    <span>NOTIFICATIONS</span>
                </Link>
            </li>
            <li>
                <Link to="/historique">
                    <img src="../img/historyWhite.svg" alt="history"/>
                    <span>HISTORIQUE</span>
                </Link>
            </li>
            <li>
                <Link to="/astuces-et-conseils">
                    <img src="../img/event_note.svg" alt="notes"/>
                    <span>ASTUCES</span>
                </Link>
            </li>
            <li>
                <Link to="/travaux-programmes">
                    <img src="../img/alarms.svg" alt="alarm"/>
                    <span>TRX PROGRAM</span>
                </Link>
            </li>
                    <li>
                        <Link to="/questions-reponses">
                            <span>FAQ</span></Link>
                    </li>
                    {/* <li>
                        <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                            <span>Contactez-nous</span></Link>
                    </li> */}
                    {!user && <li>
                        <Link to="#" style={{color:"gray"}} title="Connectez-vous d'abord">
                        <img src="./img/forum.svg" alt="FAQ-icon" />
                            <span>Contactez-nous</span></Link>
                    </li>}
                    {/* {user && <li>
                        <Link to='/message'>
                        <img src="./img/forumWhite.svg" alt="FAQ-icon" />
                            <span>Contact direct</span></Link>
                    </li>} */}
                    <li>
                        <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                        <img style={{width:"24px"}} src="./img/whatsapp_button.svg" alt="message" /> Contact direct</Link>
                    </li>
                    <li>
                        <Link to="info-appli">
                            <span>INFO DE L'APPLI</span></Link>
                    </li>
                    <li>
                        <Link to="/cgu">
                            <img src="../img/cgu.svg" alt="FAQ-icon" />
                            <span>CGU</span></Link>
                    </li>
            <li>
                <Link to="#">
                    <img src="../img/settings.svg" alt='settings'/>
                    <span>PARAMETRES</span>
                </Link>
            </li>
        <li>
                {user && <Link to="/" onClick={logout}>
                    <img src="../img/logout.svg" alt="log"/>
                    <span>Se déconnecter?</span><hr />
                </Link>}
            </li>
        </ul>
    </div>
    </div>
        </>
    );
};

export default Sidebar;