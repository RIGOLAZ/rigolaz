import React from 'react';
// import '../css/style.css';
import Footer from '../components/Footer';
import CommFrame from '../components/CommFrame';
import Comment from '../components/Comment';
import HeaderFull from '../components/HeaderFull';
import Sidebar from '../components/Sidebar';

const Comm = () => {
    return (
        <div>
            <HeaderFull />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <CommFrame/>
                <Comment />
        </main>
            <Footer />
        </div>
    );
};

export default Comm;