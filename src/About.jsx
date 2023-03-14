import React from 'react'
import HeroSection from './Components/HeroSection'
import { useEffect } from 'react'
import {useGlobalContext} from "./Context"

const About = () => {
  const {updateAboutPage}=useGlobalContext();

  useEffect(() => { updateAboutPage();  }, []);

return (
 <>
    <HeroSection  />


 </>
  )
}

export default About