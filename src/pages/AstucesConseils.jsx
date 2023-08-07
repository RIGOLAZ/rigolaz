import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AstucesConseils = () => {
    return (
        <>
            <div className="headboard_solo">
        <div className="top-menu">
            <nav>
                <p>ASTUCES ET CONSEILS</p>
            </nav>
            <div id="back">
                <Link to="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></Link>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div className="contenu">
            <h3>ASTUCES</h3>
            <div className="astuces">
                <div className="astuce1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo vero ipsam culpa deserunt adipisci nesciunt facere commodi asperiores doloribus quos tenetur sequi, eius nihil aliquid, reprehenderit eveniet, accusantium numquam.</div>
                <div className="astuce2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aut doloremque reiciendis voluptatibus veritatis accusantium nesciunt illo blanditiis soluta. Quas facilis nesciunt sed temporibus dolorem ut ipsa consectetur quo numquam?</div>
                <div className="astuce3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates illum impedit facilis ea veritatis dicta laborum, nisi vitae labore! Quaerat beatae dolores pariatur eveniet, consectetur quasi! Ex, consequatur temporibus. Possimus.</div>
                <div className="astuce4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Quas officiis dolor et explicabo cum perferendis laudantium, aspernatur nesciunt dolores ea quia possimus similique, incidunt vel. Quaerat fuga repellat rerum obcaecati.</div>
            </div>
            <h3>CONSEILS</h3>
            <div className="conseils">
                <div className="conseil1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, quia ducimus. Commodi vero laborum tenetur, blanditiis velit optio molestiae officiis laboriosam quos ab magni nostrum, repellat fugiat aspernatur? Suscipit, amet.</div>
                <div className="conseil2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id qui <br /> vel placeat ipsum harum, magni rem. Nobis pariatur, perspiciatis minus, dolore explicabo totam perferendis repellat, labore quasi vel commodi!</div>
                <div className="conseil3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nisi eligendi, pariatur fugit magni deleniti et error? Obcaecati officia illo harum voluptates nemo alias tenetur tempore numquam error! Suscipit, distinctio! </div>
                <div className="conseil1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore quis? Quibusdam, debitis quia illo, impedit cupiditate rerum delectus, et molestias nihil deserunt doloremque atque adipisci. Nemo unde corrupti cupiditate.</div>
                <div className="conseil2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore quis? Quibusdam, debitis quia illo, impedit cupiditate rerum delectus, et molestias nihil deserunt doloremque atque adipisci. Nemo unde corrupti cupiditate.</div>
            </div>
        </div>
    </main>
    <Footer/>
        </>
    );
};

export default AstucesConseils;