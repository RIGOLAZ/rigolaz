import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Footer = () => {
    const {user} = useAuthContext();
    return (
        <footer>
    <div className="contenu-footer">
        <div className="share-zone">
            <p>Partager</p>
            <Link to="whatsapp-share">
                <img id="share_whatsapp" src="./img/whatsapp_button.svg" alt="whatsapp icon" />
            </Link>
            <Link to="facebook-share">
                <img id="share_fcb" src="./img/facebook_button.svg" alt="facebook icon" />
            </Link>
            <Link to="http://www.other_sharing_site.com">
                <img id="share_other" src="./img/share_other.svg" alt="empty icon" />
            </Link>
        </div>
        <div className="footer-menu">
            <div className="bloc1">
                <ul>
                    <li>
                        <Link to="/"><img src="./img/home2.svg" alt="home" /> Acceuil</Link>
                    </li>
                    <li>
                        <Link to="/notifications"><img src="./img/chat.svg" alt="message" /> Notifications</Link>
                    </li>
                    {/* {user && <li>
                        <Link to="//wa.me/237677077030" style={{color:"gray"}} title="Conncetz-vous d'abord" target={"_blank"} rel="noopener noreffer">
                        <img style={{width:"24px"}} src="./img/whatsapp_button.svg" alt="message" /><span>Contactez-nous</span></Link>
                    </li>} */}
                    {/* {!user && <li>
                        <Link to="#" style={{color:"gray"}} title="Connectez-vous d'abord!">z
                        <img style={{width:"24px"}} src="./img/forum.svg" alt="message" /><span>Contactez-nous</span></Link>
                    </li>} */}
                    {/* {user && <li>
                        <Link to="/message">
                        <img src="./img/forum.svg" alt="FAQ-icon" /><span>Contact direct</span></Link>
                    </li>} */}
                    <li>
                        <Link to="//wa.me/237677077030" target={"_blank"} rel="noopener noreffer">
                        <img style={{width:"24px"}} src="./img/whatsapp_button.svg" alt="message" /> Contact direct</Link>
                    </li>
                </ul>
            </div>
            <div className="bloc2">
                <ul>
                    <li>
                        <Link to="/astuces-et-conseils"><img src="./img/astuce4.svg" alt="user-img" /> Astuces et conseils</Link>
                    </li>
                    <li>
                        <Link to="/questions-reponses"><img src="./img/forum.svg" alt="FAQ-icon" /> FAQ</Link>
                    </li>
                    {!user && <li>
                        <Link to="/#" style={{color:"gray"}} title="connectez-vous d'abord!" ><img src="../img/historyBlack.svg" alt="history"/> Historique</Link>
                    </li>}
                    {user && <li>
                        <Link to="/historique"><img src="../img/historyBlack.svg" alt="history"/> Historique</Link>
                    </li>}
                </ul>
            </div>
            <div className="bloc3">
                <ul>
                    <li>
                        <Link to="/travaux-programmes"><img src="./img/work-program24.svg" alt="work-program" />Travaux programmés</Link>
                    </li>
                    <li>
                        <Link to="/cgu"><img src="../img/cgu.svg" alt="FAQ-icon" /> CGU</Link>
                    </li>
                    <li>
                        <Link to="#"><img src="../img/settingsBlack.svg" alt='settings'/> Paramètres</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    );
};

export default Footer;