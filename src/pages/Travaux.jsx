import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Travaux = () => {
    return (
        <>
            <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>TRAVAUX PROGRAMMES</p>
            </nav>
            <div id="back">
                <Link to="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></Link>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="astuces">
                <div className="astuce1">ROGPIRJGIORGOIR ek ep prperp heONOL ?SOOFNO OG ZNORO GNORNG ONOG O ONONORNO ONOIGN OINGOIN OINGOINO INGOIRNOIGN ONOGI OINGOINZ ONOIRN OGOI </div>
                <div className="astuce2">dfddgdgfgbgngng</div>
                <div className="astuce3">ddffdffgfgffffgfg</div>
                <div className="astuce4">fgrr t tyt t tyty t</div>
            </div>
            <div className="astuces">
                <div className="astuce1">ROGPIRJGIORGOIR ek ep prperp heONOL ?SOOFNO OG ZNORO GNORNG ONOG O ONONORNO ONOIGN OINGOIN OINGOINO INGOIRNOIGN ONOGI OINGOINZ ONOIRN OGOI </div>
                <div className="astuce2">dfddgdgfgbgngng</div>
                <div className="astuce3">ddffdffgfgffffgfg</div>
                <div className="astuce4">fgrr t tyt t tyty t</div>
            </div>
        </div>
    </main>
    <Footer/>
        </>
    );
};

export default Travaux;