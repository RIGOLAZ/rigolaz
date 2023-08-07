import React from 'react';
import Footer from '../components/Footer';
import Comment from '../components/Comment';
// import PurchasePanel from '../components/PurchasePanel';
import HeaderFull from '../components/HeaderFull';
import Sidebar from '../components/Sidebar';
import Onboarding from '../components/Onboarding';
import PurchasePanel from '../components/PurchasePanel';

const Home = () => {
    return (
        <>
            <HeaderFull />
            <Sidebar />
        <main>
            <div id="marge"></div>
            <div>
            <div className='main-purch'>
                <PurchasePanel/>
                <Onboarding/>
                </div>
            </div>
            <Comment />
        </main>
            <Footer />
        </>
    );
};

export default Home;