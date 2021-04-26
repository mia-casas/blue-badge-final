import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './components/Auth/Auth'
import RecipeCarousel from './components/carousel.component';
import HomePage from './components/Home/Home';

// Import content sections
import HeaderNav from './components/site/HeaderNav';
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

  const protectedViews = () => {
    return (sessionToken ===localStorage.getItem('token') ? <HomePage token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (

    <div className="App">
        <HeaderNav />
        <SavedRecipies />
        {protectedViews()}
        <RecipeCarousel/>
        <Footer /> 
  
    </div>
  );
}

export default App;
