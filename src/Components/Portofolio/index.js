import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Portfolio,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  ImageBox,
  Image,
  Overlay,
  OverlaySpan
} from './style.js';

const Portofolio = () => {

  //React Hooks
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get("js/data.json").then(result => { setImages(result.data.portofolio) })
  }, []);

  const imagesList = images.map((imageItem) => {
    return (
      <ImageBox key={imageItem.id}>

        <Image src={imageItem.image} alt="" />

        <Overlay>
          <OverlaySpan> Show Image </OverlaySpan>
        </Overlay>

      </ImageBox>

    );
  })
  return (
    <Portfolio>

      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>

      <PortfolioList>
        <PortfolioItem active >All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      {imagesList}

    </Portfolio>
  );//end return
}

export default Portofolio;