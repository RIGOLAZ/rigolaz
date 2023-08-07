import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
// import Subscribe from ''

const CommFrame = () => {
    const {user} = useAuthContext()
    return (
        <>
            <div className="content-premium">
    <div className="trademark-premium">
        <img src="../img/trade mark-light-mini.svg" alt="trademark RIGOLAZ" />
    </div>
    <div className="notif-premium">
        <h>Cet outil vous donne la possibilité d’interagir (en push) avec votre compteur via l’appli. Vous pouvez donc:
            <ul>
                <li>Voir les courbes de charge</li>
                <li>Le solde en compteur</li>
                <li>Recharger votre compteur à distance</li>
                <li>Avoir des alertes du compteur (Manque de crédit, manque de courant, manque de phase, etc…)</li>
            </ul>
        </h>
    </div>
    {user && <button className="valPurch"><Link to="/remote">Go</Link></button>}
    {!user && <button className="valPurch"><Link to="/auth">log first</Link> </button>}</div>
        </>
    );
};

export default CommFrame;