import React from 'react';
import {Creative ,CreativeInfo , InfoTitle , Span , InfoDir , InfoDetails ,AnchorTag , Overlay } from './style.js';
const About =  () => {
  return (
    <Creative>
        <Overlay>
          <div className="container">
            <CreativeInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AnchorTag href="#">explicabo</AnchorTag> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDetails>
                <InfoDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDetails>
            </CreativeInfo>
        </div>
        </Overlay>
    </Creative>
  );//end return
}

export default About;