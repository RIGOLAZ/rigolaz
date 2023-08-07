import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const QR = () => {
    return (
        <>
        <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>FOIRE AUX QUESTIONS</p>
            </nav>
            <div id="back">
                <Link to="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></Link>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <div className="faq">
                <h1>Foire aux questions</h1>
                <h3>Qu’est-ce que l’application ?</h3>
                <br />
                <p>L’application <span className="bold">RIGOLAZ</span> est un service de mobile e-billing dans le cadre, premier temps, des compteurs à prépaiement, accessible 24h/24 et 7j/7.
                    <br />L’application <span className="bold">RIGOLAZ</span> vous permet donc entre autre de :
                    <ul>
                        <li>Effectuer l’achat de crédit pour son propre compte</li>
                        <li>Faire un achat pour un tiers à partir de l’étranger ou en mode local</li>
                        <li>Choisir l'opérateur/banque de son choix pour l’achat de crédit</li>
                        <li>Consulter l’historique des achats</li>
                        <li>Avoir accès à son compteur à distance( Voir la courbe de charge, recharger son compteur, commander son compteur). Option très bientôt disponible en <span className="premium">PREMIUM</span>.</li>
                    </ul>
                </p>
                <br />
                <h3>Qui peut souscrire à l’application mobile RIGOLAZ?</h3>
                <p>Ce service est ouvert à tous, particuliers et Professionnels disposant ou pas d’un compteur prépayé, soit pour Effectuer l’achat de crédit pour son propre compteur, soit pour acheter du crédit pour un tiers.</p>
                <br />
                <h3>Quelles sont les avantages de l’application mobile RIGOLAZ?</h3>
                <ul>
                    <li><span className="bold">Autonomie</span>: Vous gérez votre compte prépayé en toute autonomie, vous pouvez consulter l’historique de vos transactions.</li>
                    <li><span className="bold">Economie du temps et de l’argent</span>: Ici le service est disponible 24/7. Gagnez donc un temps précieux en évitant de vous déplacer en agence juste pour les opérations courantes.</li>
                    <li><span className="bold">Assistance sans delai</span>: Une équipe professionnelle et jeune reste scochée au mobile toujours prête à vous écouter et interagir avec vous</li>
                </ul>
                <br />
                <h3>Comment souscrire à l’application mobile RIGOLAZ?</h3>
                <p>Pour souscrire à ce service, il faut tout d’abord télécharger l’application dans un téléphone Android ou IOS compatible à partir des plates formes dédiées(Applestore, Google play Store, ensuite renseigner le formulaire d’enregistrement.
                    Un message contenant votre identifiant et votre mot de passe vous sera envoyé à vos différentes coordonnées.</p><br />
                <h3>Renseigner un numéro différent de celui déclaré à l’agence bloquerait il ma souscription?</h3>
                <p>Non, pas du tout. Vous êtes libre de mettre les coordonnées à votre guise. Puisque ce n’est pas toujours celui qui passe à l’agence pour demander les compteurs qui va forcément les utiliser.
                    <br />Prenons exemple d’un bailleur qui demande les compteurs prépayés pour ses “futurs locataires”.</p>
                <br/>
                <h3>Si lors de mon enregistrement, je me rends compte que le compteur que je veux utiliser est la propriété d’un autre utilisateur, que faire?</h3>
                <p>En effet, dans les cas où un utilisateur d’un compteur viendrait à déménager ou à libérer physiquement ce dernier, il est possible que le nouveau venu demande la propriété dudit compteur. Lors de la tentative d’enregistrement, le message
                    suivant s’affichera...
                    <br />
                    <pan className="notif">Ce compteur N°************ est actuellement la propriété de quelqu’un d’autre. Voulez-vous lui demander de vous passer la main ? ...</pan>
                    <br />Dès votre validation, l’ex utiliseur recevra donc une notification lui demandant de libérer le compteur. Vous serez donc informé dès la libération du compteur via les contacts que vous avez renseignés lors de la tentative d’enregistrement.</p>
                <br />
                <h3>Combien de temps après la demande de propriété devrais-je attendre pour la libération du compteur?</h3>
                <p>La durée maximale pour réaction de libération de compteur par l’ex propriétaire est de <span className="bold">"48h"</span>. Passé ce delais, Le service <span className="bold">RIGOLAZ</span> prendra la charge de contacter le client pour lui demander
                    la permission afin de libérer le compeur demandé dans le système.</p>
                <br />
                <h3>Quel sont les téléphones compatibles avec RIGOLAZ?</h3>
                <p>Les téléphones sous système Android ET IOS. Le développement de Mac/Pc, et Windows phone étant en cours de développement et d'ajustement...</p>
                <br />
                <h3>Quels sont les systèmes d’exploitation mobiles compatibles avec l’application RIGOLAZ?</h3>
                <p>Android 5.1 LOLLIPOP et plus.</p>
                <br />
                <h3>A quoi servent les mise-à-jour de l’application RIGOLAZ?</h3>
                <p>Les mises-à-jour permettent à votre application RIGOLAZ de fonctionner de façon optimale et d’améliorer la version présente dans votre appareil.</p>
                <br />
                <h3>A quoi sert la notification d’activation que j’ai reçue par SMS?</h3>
                <p>Les informations présentes dans le sms vous servirons pour vous loguer (Identifiant + Mot de passe).</p>
                <br />
                <h3>Je n’ai pas reçu de code de notification d’activation par SMS. Que faut-il faire?</h3>
                <p>Si au bout de plusieurs tentative vous ne recevez toujours pas de code, bien vouloir nous contacter au numéro Whatsapp RIGOLAZ (237) 677077030, 24/7.</p>
                <br />
                <h3>Puis-je mémoriser mes coordonnées saisies lors du login pour ne pas avoir à le refaire?</h3>
                <p>Bien sûr que oui. Pour éviter de renseigner les coordonnées de login à chaque utilisation de l’application, vous pouvez Cocher la case <span className="bold">Mémoriser le mot de pass</span>. Vos coordonnées ne vous seront plus demandées dans
                    les 3 mois qui suivront. Passé ce delais, votre mot de passe vous sera redemandé.</p>
                <p>NB: Vous pouvez décocher la case à tout moment pour annuler la mémorisation des coordonnées de login.</p><br />
                <h3>Puis je me connecter sur un autre téléphone tout en ayant déjà mémorisé mes coordonnées de login dans un téléphone en particulier et bénéficier de toutes mes données?</h3>
                <p>Bien sûr que oui. Vous pouvez vous connecter dans autant de téléphones que vous souhaitez et bénéficier des mêmes options</p>
                <br />
                <h3>Devrais-je me soucier si un tiers venait à accéder à mon profil sans mon accord?</h3>
                <p>L’application RIGOLAZ a des niveaux de sécurité très accrues. Un tiers, ne pourra pas accéder à votre compte sans avoir votre identifiant et votre mot de passe, les deux combinées, en mois moins qu'il ait pu les avoir par une fuit de votre
                    part. Et même ayant accédé à votre profil, il ne pourrait pas générer de crédit d’électricité avec vos coordonnées bancaires ou d’opérateur.</p>
                <p>Il faut aussi noter que chaque fois qu'une tierce personne tenterait de se connecter avec vos coordonnées dans un téléphone différent du votre, vous recevrez une notification par vos diiférents contacts</p>
                <br />
                <h3>J’ai oublié mes coordonnées de login, que faire?</h3>
                <p>Pas de panique, dans le pavé de login,Cliquez sur<span className="bold"> Mot de passe oublié</span>, Vous devriez donc renseigner le numéro de compteur et votre numéro de téléphone. Vos coordonnées vous seront automatiquement transmises à vos
                    différents contacts.
                </p>
                <br />
                <h3>J’ai changé de numéro de téléphone/ adresse Mail. Que faire pour actualiser mes coordonnées?</h3>
                <p>Allez sur , → Paramètres , → Compte, →Modifier, enfin renseignez et validez. A la fin, vous serez notifiés à vos nouvelles coordonnées.</p>
                <br />
                <h3>A quoi sert la <span className="bold">COMM</span>?</h3>
                <p>La <span className="bold">COMM</span> c'est la "COMMUNICATION COMPTEUR A DISTANCE. Option intégralement disponible en <span className="premium">PREMIUM</span>.</p>
                <p>Le segment<span className="bold">PREMIUM</span> vous donne la possibilité d'interagir (en push) avec votre compteur en passant par l’appli <span className="bold">RIGOLAZ</span>. Vous pourriez donc:
                    <ul>
                        <li>Voir les courbes de charge</li>
                        <li>Voir le solde en compteur</li>
                        <li>Recharger votre compteur à distance</li>
                        <li>Avoir des alertes du compteur (Manque de crédit, manque de courant, manque de phase, etc…)</li>
                    </ul>
                </p>
                <br />
                <h3>Pourrais-je avoir des infos sur les travaux programmés et autres infos utiles?</h3>
                <p>Bien sûr que Oui. Vous pourrez être au courant des travaux programmés sur le réseau électrique afin de ne pas être surpris par les coupures, en moins qu'il y ait un déclenchement de votre ligne suite à une panne tout défaut y relatif.
                    Vous pourrez aussi avoir des informations utiles pour l’utilisatoin optimale de votre énergie électrique pour plus d’économie avec une assistance de nos ingenieurs.</p>
                <h3>En cas de problème et pour tout besoin d’assistance, que faire?</h3>
                <p>Bien vouloir nous contacter gratuitement dans la boite de notification et de messagerie instantanée conçue et pensée seulement pour vous 24/7.</p>
                <p className="content-foot">RIGOLAZ</p>
            </div>
        </div>
    </main>
    <Footer/>
    </>
    );
};

export default QR;