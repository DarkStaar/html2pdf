import React from 'react';
import styles from '../styles/Home.module.css'

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Converter from '../components/Converter';
import RegIndex from '../components/shared/RegisterIndex';

import { useState, useContext } from 'react';
import AppContext from '../lib/AppContext';
import Description from '../components/Description';
import Contact from '../components/Contact';

const Index = () => 
{
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  return (
      <div className="container-wrap">
        <Header />
        <Converter />
        <RegIndex />
        <Description />
        <Contact />
        <Footer classN={"footer-index"}/>
      </div>
  );
}


export default Index;