import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

// Import content sections
import Auth from './components/Auth/Auth';
import HeaderNav from './components/site/HeaderNav';
import Sidebar from './components/site/Sidebar';
import Carousel from './components/site/Carousel';
import SavedRecipies from './components/site/SavedRecipies'
import Footer from './components/site/Footer';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  return (
<div>
        <HeaderNav />
            <Auth updateToken={updateToken}/>
        <Carousel />
        <SavedRecipies />
        
        <Footer />
</div>
  );
}

export default App;
