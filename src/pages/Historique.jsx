import React from 'react';
import Footer from '../components/Footer';
import Histo from '../components/Histo';

const Historique = () => {
    return (
        <>
        <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>Historique</p>
            </nav>
            <div id="back">
                <a href="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></a>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <Histo />
        </div>
        <Footer />
        </main>
        </>
    );
};

export default Historique;