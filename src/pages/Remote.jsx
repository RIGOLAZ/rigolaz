import React from 'react';
import { Link } from 'react-router-dom';
const Remote = () => {
    return (
        <>
            <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>REMOTE METER</p>
            </nav>
            <div id="back">
                <Link to="/"><img src="img/arrow-left-solid.svg" alt="arrow"/></Link>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="astuces">
                <img src="./css/bg-img/conso.png" alt="conso" />
                
            </div>
            <div className="astuces">
            </div>
        </div>
    </main>
        </>
    );
};

export default Remote;