import React from 'react';
// import '../css/style.css';
import Footer from '../components/Footer';


const InfoAppli = () => {
    return (
        <>
        <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>INFO APPLI</p>
            </nav>
            <div id="back">
                <a href="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></a>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="info-content">
                <img src="img/final-icon-light.svg" alt="logo RIGOLAZ" />
                <p>Application version 1.0.1</p>
                <p>Editeur:</p>
                <p>Rigobert EKWA MOUNGUI</p>
                <p>© 2017-2022 RIGOLAZ</p>
            </div>
        </div>
        <Footer />
        </main>
        </>
    );
};

export default InfoAppli;