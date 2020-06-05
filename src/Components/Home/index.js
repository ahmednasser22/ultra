import React from 'react';
import {HomeDiv , HomeInformation , HomeTittle , HomeInfo , HomeDetails , Span , HomeBtn} from './style.js';

const Home =  () => {

  
  return (
    <HomeDiv>
        <div className="container">
            <HomeInformation>
                <HomeTittle>Ahmed Nasser</HomeTittle>
                <HomeInfo >Creative Director</HomeInfo>
                <HomeDetails >
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDetails>
                <HomeBtn id = "Let's_Begin_Btn">Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </HomeDiv>
  );//end return
}

export default Home;