import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Img from '../../assest/jrlogo.jpg';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import './NavigationBar.css';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
// const logos = require('../../assest/jrent1.png'); 
import logo from '../../assest/jren2.png';
// const Logoname = styled.section`
//   background-image: url(${logos});
//   height: 200px;
//   width: 20%;
// `;

const NavigationBar = () => {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )
  }, []);

  const initialState = {
    menuflag: false
  }
  const [state, setState] = useState(initialState);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // useEffect(() => {
  //   console.log("MenuItem" + MenuItem);
  //   console.log(MenuItem);
  // })
  const menuHandler = () => {
    setState({
      ...state,
      menuflag: !state.menuflag,
    })
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className="navbar-container container ">

            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <h3 className='logo-name'>JR Modular Enterprises</h3>
              
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>           
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              {MenuItem.map((item, index) => {
                return (
                  <li className='nav-item'>
                    < Link className='nav-links' to={item.url} onClick={closeMobileMenu}>{item.title}</Link>
                  </li>

                )
              })}

            </ul>    

         





            {/* 
        {state.menuflag ?
          <div className="sidebar">
            <ul className="sidebarList">
              {MenuItem.map((item, index) => {
                return (
                  <li key={index} className="row" onClick={() => {
                    window.location.pathname = item.url
                  }}>
                    {item.display !== "a" ?
                      // < a 
                      // // className="row"
                      // className={item.cName}

                      // href={item.url}>{item.title}</a>
                      <div>{item.title}</div>
                      : null}
                  </li>
                )
              })}
            </ul>
          </div>
          : null} */}


          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavigationBar;
