import '../styles/globals.css'
import '../styles/header.scss'
import '../styles/login.scss'
import '../styles/index.scss'
import '../styles/generate.scss'
import '../styles/description.scss'
import '../styles/_media-queries.scss'

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import AppContext from '../lib/AppContext';

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => 
  {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log("Use Effect se desio")
    if(token)
    {
      setIsLoggedIn(true);
    }
  }, []);

  return(
    <AppContext.Provider 
      value={
        {isLoggedIn,  setIsLoggedIn }
    }>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
