import './App.css';
import React, {useState, useEffect} from 'react';
import Auth from './components/Auth/Auth'


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
    <div className="App">
          <Auth updateToken={updateToken}/>
  
    </div>
  );
}

export default App;
