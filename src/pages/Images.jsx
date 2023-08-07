import Footer from '../components/Footer';
import React, {useState} from 'react'
import axios from 'axios';
import {Image} from 'cloudinary-react'

const Images = () => {
const[imageSelected, setImageSelected] = useState();
console.log(imageSelected);

    const uploadImage = () =>{
        const formData = new FormData()
        formData.append("file",imageSelected)
        formData.append('upload_preset', 'laztof')
        axios.post(
            'https://api.cloudinary.com/v1_1/do8lyndou/image/upload',
             formData
             ).then((response)=>{
            console.log(response)
        });
    };

    return (
        <>
        <div class="headboard_solo">
        <div class="top-menu">
            <nav>
                <p>MES IMAGES</p>
            </nav>
            <div id="back">
                <a href="/"><img src="img/arrow-left-solid.svg" alt="arrow" /></a>
            </div>
        </div>
    </div>
    <main>
        <div id="marge1"></div>
        <div class="contenu">
            <div>
            <div id="marge1"></div>
            <div id="marge1"></div>
                <input type="file"
                onChange={(event)=>{
                    setImageSelected(event.target.files[0]);
                } }/>
                <button onClick={uploadImage} >upload Image</button>

                {/* Pour récupére les images de cloudinary */}
                <Image className='ImgCloud' cloudName='do8lyndou' publicId='https://res.cloudinary.com/do8lyndou/image/upload/v1646821216/hx2edy1afwgmt8ot1udu.svg'/>
                
                    <div id="marge1"></div>
                    <div id="marge1"></div>
                    <div id="marge1"></div>
            </div>
        </div>
        <Footer />
        </main>
        </>
    );
};

export default Images;