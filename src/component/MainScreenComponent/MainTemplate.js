import React,{useEffect, Component} from 'react';
import './MainTemplate.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
//import logo from '../../assest/Images/1.jpeg';
// import 
const imgas = 'https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/1234567890.png';
const imgscr='https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/imagefile.txt';

// const express = require("express")
// const app = express()
// const cors = require("cors")

    // app.use(cors())
const MainTemplate = ({
    lightBg,
  topLine,
//   lightText,
//   lightTextDesc,
//   headline,
//   description,
//   buttonLabel,
  img,
  imgs,
//   alt,
//   imgStart
}) => {
    async function imageLoader() {
        
        // const request = await fetch('https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/imagefile.txt');
        // const response = await request.json();
        
        fetch('https://storage.googleapis.com/helpone-9bf33.appspot.com/imgsrc4.txt',{
            mode: 'no-cors'
          })
        // .then(response => response.json())
        .then(res => res.text())
        .then(data => {
            console.log("datass");   
            console.log(data);           
        }).catch(er =>{
            console.log("error"+er);
        }
            
        );
        // console.log(request+" request/@");
        // {request.map((item, index) => {
        //     console.log(item+" item/@");
        // })}
        // return request
      }


    useEffect(()=>{
        imageLoader();
        console.log(imgscr+" imgscr/");
        console.log(imgs);
        console.log(imgs+" imgscr/");
    },[])
    const renderImage = (imageUrl) => {
        console.log("imageUrl");

        console.log(imageUrl);
        return (
          <div>
            <img src={imageUrl.src} />
          </div>
        );
      }
    
    return (
        <>
            <div 
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
           
              
               <div className='home__hero-text-wrapper'>
               <div className='top-line'>{topLine}</div>
               
               <div 
               className='home__hero-img-wrapper'
               >
           
                {/* {imgs.map(imageUrl => renderImage(imageUrl))} */}
                {/* {imgs.map((i,index)=>{
                    console.log(i.src+" map index "+ index);
                    
                    // <img src={i.src} 
                    // // {i.src}
                    
                    // key={index}  className='home__hero-img' />
                })}                 */}
              
                {/* <img src='https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/1234567890.png'  className='home__hero-img' /> */}
                {/* <img src={logo}  className='home__hero-img' /> */}
              <CarouselContainer imgs={imgs}/>
                   </div> 
                   
              
                   </div>
            </div>
        </>
    )
}

export default MainTemplate
