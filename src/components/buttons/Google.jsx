import React from 'react';
import firebase from 'firebase';
// import { Link } from 'react-router-dom';
import { projectAuth } from '../../firebase/config';

const Google = () => {
        const signInWithGoogle = ()=>{
            const provider = new firebase.projectAuth.GoogleAuthProvider();
            projectAuth.signInWithPopup(provider);
    }
    return (
        <>
            <button onClick={signInWithGoogle} class="social-button" id="google-connect"><span>Google</span></button>
        </>
    );
};

export default Google;