import React from 'react';
import styled from 'styled-components';
// import Background from 'https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/1234567890.png';
import NavigationBar from '../Navigation/NavigationBar';
import Background from '../../assest/jr1.png';
import { RiMenuUnfoldFill,RiMenuFoldFill } from "react-icons/ri";
import './HeaderImage.css'
  const Section = styled.section`
  background-image: url(${Background});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.p`
  font-size: 55px;
  color: rgb(13, 40, 61,0.719);
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

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 10%;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(60deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(255 0 177 / 12%);
`;
 const HeaderImage = () => {
    return (
        <div>
             <Section>
             <NavigationBar/> 
             <Left>
          <Title>
          Interior Designer and Decorator in Chennai 
          </Title>
          <Desc>
            
          </Desc>     
          <div className="buttonstyle"> 
          < a className="buttona" href="#">Get Quotes</a>
          {/* <div className="butticon">
          <RiMenuUnfoldFill  size="1.2em"/>
          </div> */}
          </div>  
        </Left>
                 </Section>
        </div>
    )
}

export default HeaderImage;