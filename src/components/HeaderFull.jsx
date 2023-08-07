import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {useLogout} from '../hooks/useLogout'


const HeaderFull = () => {
    const {user} = useAuthContext();
    
    const {logout} = useLogout()
    return (
        <>
            <div className='headboard'>
                {user && <img id='connected' src="../img/connected.svg" alt="connected point" /> }
        <div className="top-menu">
            <div id="trademark">
                <Link to='/'><img src="../img/trade mark-light-mini.svg" alt="tm"/></Link>
            </div>
            <div id="user">
                {user &&  (<>
                    <Link to="/" onClick={logout}>
                    <span id='logout'>Déconnecter</span>
                </Link>
                    <img src="../img/user-statut-on.svg" alt="home" /></>)}
                {!user && <Link to="/auth">
                    <img src="../img/user-statut-off.svg" alt="home" />
                </Link>}
            </div>
            <div id="logo-header">
                <Link to='/'><img src="../img/logo-fond-blanc.svg" alt="logo RIGOLAZ" /></Link>
            </div>

            <nav>
                <NavLink to='/' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}>ACHAT</NavLink>
                <NavLink to='/comm' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}> COMM </NavLink>
                <NavLink to='/Codes' className={({isActive}) =>(isActive ? 'nav-active' : 'nav-inactive')}> CODES </NavLink>
            </nav>
        </div>
    </div>
        </>
    );
};

export default HeaderFull;