import React from 'react';
import april from './gif/april.gif'

const PrivateHome = () => {
    return (
        <div className='"container p-5'>
            <h1 className='display-3 text-light mb-4'>
                Bienvenue! par ici!...
            </h1>
            <img src={april} alt='Avril pluie' />
        </div>
    );
};

export default PrivateHome;