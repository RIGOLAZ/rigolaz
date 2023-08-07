import React from 'react';

const Onboarding = () => {
    return (
        <div className='welcome'>
            {/* <div className='welBloc1'>PLUS DE VISIBILITE <br /><span>Rechargez votre compteur à <br /> prépaiement,</span><br /><span>Suivez vos consommations.</span></div><br /> */}
            <p className='welBloc1'>PLUS DE VISIBILITE</p>
            <p>Rechargez votre compteur prépayé </p> 
            <p>prépaiement,</p><p>Suivez vos consommations.</p><br />
            <div className='welBloc2'>DEVENEZ AUTONOME<br /><span>Gagnez en temsp. Fini le rang. Tout se passe ici.</span></div><br />
            <div className='welBloc3'>CHOIX MULTIPLE<br /><span>Choisissez votre canal d'achat préféré.</span></div>
            <img className='imgOnboard' src="../img/onboarding1-large.svg" alt="bienvenue" />
        </div>
    );
};

export default Onboarding;