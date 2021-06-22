import React from 'react';
import styled from 'styled-components';
// import Background from 'https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/1234567890.png';
import NavigationBar from '../Navigation/NavigationBar';
import Background from '../../assest/jr1.png';
import { RiMenuUnfoldFill,RiMenuFoldFill } from "react-icons/ri";
import { Button } from '../Button/Button'; 
import './HeaderImage.css'
  const Section = styled.section`
  background: #1c2237;
  background-image: url(${Background});
   height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

const Content = styled.div`
  width: 100%;
  // height: 100px;
`;

const Left = styled.div`
align-items: center;
   padding-left: 230px;
   padding-top: 180px;
   justify-content: center;
`;

const Title = styled.p`
  font-size: 55px;
  color: #373737;
  font-weight: 800;
  border-radius: 3;
  border-color: blueviolet;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;


 const HeaderImage = () => {
    return (
        <div>
             <Section>
              
             {/* <NavigationBar/>  */}
             <div className="container">
          <div className="Title">
          Interior Designer and Decorator in Chennai 
          </div>            
          <div className="buttonstyle"> 
          < a className="buttona" href="#">Get Quotes</a>
          {/* <div className="butticon">
          <RiMenuUnfoldFill  size="1.2em"/>
          </div> */}
          </div>  
          {/* <Button buttonStyle='btn--primary'
                      buttonSize='btn--large'
                      buttonColor='primary'
                     >
                        Get
                      </Button> */}
        </div>
                 </Section>
                 
        </div>
    )
}

export default HeaderImage;