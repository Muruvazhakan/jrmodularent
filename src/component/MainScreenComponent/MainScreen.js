import React from 'react'
import HeaderImage from './HeaderImage';
import MainTemplate from './MainTemplate';
import {Cupboarddata} from '../Datas/Datas';
export const MainScreen = () => {
    return (
        <div>  
                    
            <HeaderImage/>  
            <MainTemplate {...Cupboarddata}/>    
            <MainTemplate {...Cupboarddata}/>          
        </div>
    )
}

export default MainScreen;
