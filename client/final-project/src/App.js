import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Col, Row } from 'reactstrap'

// Import content sections
import Auth from './components/Auth/Auth'
import RecipeCarousel from './components/carousel.component';
import HomePage from './components/Home/Home';
import HeaderNav from './components/site/HeaderNav';
import SavedRecipes from './components/site/SavedRecipes'
import Footer from './components/site/Footer';
import RecipeSearch from './components/site/RecipeSearch';

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
<<<<<<< HEAD
        <HeaderNav />
        <SavedRecipes />
        {protectedViews()}
        <RecipeSearch />
        <RecipeCarousel/>
        <Footer /> 
  
=======
       <Col>
       <HeaderNav />
          <Row>
          <Col>
          {protectedViews()}
          </Col>
            <Col xs="4">
              <br/>
            <RecipeCarousel/>
            <br/>
            <Row>
              <SavedRecipes />
            </Row>
            </Col>
          </Row>
       <br/>
       <br/>
        <Footer />
       </Col>
>>>>>>> 438ace4badb08a22c132e2e9373c89b51512b3da
    </div>
  );
}

export default App;
