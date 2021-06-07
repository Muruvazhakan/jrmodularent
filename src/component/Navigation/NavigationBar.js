import React, { useEffect,useState } from 'react';
import styled from 'styled-components/macro';
import Img from '../../assest/jrlogo.jpg';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { RiMenuUnfoldFill,RiMenuFoldFill } from "react-icons/ri";
import './NavigationBar.css';
// const logos = require('../../assest/jrent1.png'); 
import logo from '../../assest/jren2.png';
// const Logoname = styled.section`
//   background-image: url(${logos});
//   height: 200px;
//   width: 20%;
// `;
const NavigationBar = () => {
 
  const initialState= {
    menuflag:false
  }
  const[state,setState] = useState(initialState);

  useEffect(() => {
    console.log("MenuItem" + MenuItem);
    console.log(MenuItem);
  })
  const menuHandler =()=>{
    setState({
      ...state,
      menuflag:!state.menuflag,
    })
  }
  return (
    <nav className="NavbarItems">    
      <h1>
      {/* <Logoname/> */}
      <div className="Navbar-logo"> 
      <div className="logo "  onClick={()=>menuHandler()}> 
      {!state.menuflag ?
       <RiMenuUnfoldFill  size="2em"/>
       : <RiMenuFoldFill  size="2em"/>
    }   
     </div>
      <img src={logo} alt="Logo" width="550" height="100" />
      
     
      {/* <h3>JR Modular Enterprises </h3> */}
      {/* <img src={logos} width="100" height="50" /> */}
      {/* <div className="imgback"></div> */}
     
      </div>
      </h1>
      <div>
        <ul className={state.menuflag?'nav-menu active':'nav-menu' }>

          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                < a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            )
          })}

        </ul>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
