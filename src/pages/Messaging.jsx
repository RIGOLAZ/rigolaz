import React from 'react';
import Footer from '../components/Footer';
import MessagePanel from '../components/MessagePanel';

const Messaging = () => {
    return (
        <>
            <div class="headboard_solo">
        <div class="top-menu">
            <nav>
                <p>Messagerie</p>
            </nav>
            <div id="back">
                <a href="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></a>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div class="contenu">
           <MessagePanel />
        </div>
        </main>
    <Footer />
        </>
    );
};

export default Messaging;