import React from 'react'
import HeroSection from './Components/HeroSection'
import {useGlobalContext,AppProvider} from "./Context"
import { useEffect } from 'react';
import Service from './Service';
import Contact from './Contact';


const Home = () => {

 const {updateHomePage}=useGlobalContext();
 
 useEffect(() => { updateHomePage();
   }, []) ; 
  return (
   <>
      <HeroSection/>
      <Service/>
      <Contact/>

   
   </>)
};

export default Home