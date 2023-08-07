import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMini = () => {
    return (
        <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p></p>
            </nav>
            <div id="back">
                <Link to="/"><img src="../img/arrow-left-solid.svg" alt="arrow" /></Link>
            </div>
        </div>
    </div>
    );
};

export default HeaderMini;