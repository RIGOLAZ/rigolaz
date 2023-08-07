import React from 'react';
// import '../css/style.css';
import CodeFrame from '../components/Codeframe';
import Footer from '../components/Footer';
import Comment from '../components/Comment';
import HeaderFull from '../components/HeaderFull';
import Sidebar from '../components/Sidebar';

const Codes = () => {
    return (
        <div>
            <HeaderFull />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <CodeFrame/>
            <Comment />
        </main>
            <Footer />
        </div>
    );
};

export default Codes;