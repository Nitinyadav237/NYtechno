import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar';


const Header = () => {
  return (
    <MainHeader>
    <NavLink to='/'/>
    <img className="logo " src="/images/logo.png" alt="logo" />
    <Navbar/>
    </MainHeader>
  )
}

const MainHeader=styled.header`
padding:0.48rem;
height:10rem;
background-color:${({ theme }) => theme.colors.bg} ;
display:flex ;
justify-content:space-between;
align-items:center ;

.logo{
  height:auto ;
  max-width:15% ;
  position:absolute ;
  left:23px;
}
`;


export default Header