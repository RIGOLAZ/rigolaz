import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {useAuthState} from 'react-firebase-hooks'
// import { useAuthContext } from './hooks/useAuthContext';
import './css/style.css';
import Home from './pages/Home';
import Comm from './pages/Comm';
import Codes from './pages/Codes';
import Auth from './pages/Auth';
import CGU from './pages/CGU';
import Travaux from './pages/Travaux';
import QR from './pages/QR';
import AstucesConseils from './pages/AstucesConseils';
import Notifications from './pages/Notifications';
import InfoAppli from './pages/InfoAppli';
// import Private from './pages/private/Private';
// import PrivateHome from './pages/private/privateHome/PrivateHome';
import Remote from './pages/Remote';
import Messaging from './pages/Messaging';
import Historique from './pages/Historique';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  // const {authIsReady} = useAuthContext()
  return (
    <>
      {/* {authIsReady &&( */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/accueil' element={<Home/>} />
          {/* <Route path='/private' element={<Private/>} >
            <Route path='/private/private-home' element={<PrivateHome/>} />
          </Route> */}
          <Route path="/comm" element={<Comm/>} />
          <Route path="/remote" element={<Remote/>} />
          <Route path='/codes' element={<Codes/>}/>
          <Route path='/whatsapp-share' element='http://www.whatsapp.com' />
          <Route path="/facebook-share" element='http://www.facebook.com' />
          <Route path='/other-share' element='http://www.other_sharing_site.com'/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/astuces-et-conseils' element={<AstucesConseils/>}/>
          <Route path='/info-appli' element={<InfoAppli/>}/>
          <Route path='/contactez-nous' element={<Messaging />} />
          <Route path='/questions-reponses' element={<QR/>}/>
          <Route path='/cgu' element={<CGU/>}/>
          <Route path='/travaux-programmes' element ={<Travaux/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/historique' element={<Historique />} />
          <Route path='/message' element={<Messaging />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;