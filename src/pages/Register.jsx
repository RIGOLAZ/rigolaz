import '../css/login-on.css';
import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"



const Register = () => {
    const navigate = useNavigate()

    const [state, setState] = useState({
        identifiant: 'winnie',
        password:'Angelus'
    });
    const [formdata, setFormdata] = useState({
        identifiant:'',
        password:'',
        num_cpt:'',
        phone:'',
        email:'',
        sexe:'masculin'
    })

    const handleChange = (e)=>{
        setFormdata((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
            console.log(formdata);
    };
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', formdata)
        .then((res)=>{
            console.log('Enregistrement réussi');
            navigate("/login")
        })
        .catch((err)=>{
            console.log("Echec d'enregistrement");
        })
        console.log(formdata);
    }

    const styl1={
        margin: '0',
        color: 'rgb(158, 157, 157)',
        font:"600 16px/18px 'Open Sans', sans-serif"
    }

    return (
        <form style={styl1} method="post" action="node.js" onSubmit={handleSubmit}>
        <div className="login-wrap">
            <div className="login-html">
                <div id="back">
                    <a href="/"><img src="../img/arrow-left-solid.svg" alt="arrow" /></a>
                </div>
                <div id="top-logo">
                    <img src="../img/final-icon-light.svg" alt="logo RIGOLAZ" />
                </div>
                <input id="tab-1" type="radio" name="tab" className="sign-in" />
                <label htmlFor="tab-1" className="tab"></label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" checked/>
                <label htmlFor="tab-2" className="tab">S'ENREGISTRER</label>
                <div className="login-form">
                <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">identifiant</label>
                            <input type="text" className="input" name='identifiant' onChange={handleChange} onKeyUp={handleChange} required="required" placeholder="" /></div>
                        <div className="group">
                            <label htmlFor="cptr" className="label">Numéro de compteur</label>
                            <input id="cptr" type="number" name='num_cpt' onChange={handleChange} className="input" required="required" placeholder="" />
                        </div>
                        <div className="group">
                        <label htmlFor="email" className="label">Adresse mail</label>
                            <input id="mail" type="email"  name='email' onChange={handleChange} className="input" required="required" />
                        </div>
                        <div className="group">
                            <label htmlFor="password" className="label">Mot de passe</label>
                            <input type="password" className="input" id='password' name='password' onChange={handleChange} onKeyUp={handleChange} required="required" placeholder="" />
                            </div>
                        <div className=" group ">
                            <input type="submit" className="button" value="S'enregistrer" />
                            <div className=" hr "></div>
                            <div className='member'>
                                <Link to='/login'>Déjà membre?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
};

export default Register;