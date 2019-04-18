import React, { Component } from 'react';


import './Picture.sass';

const p1 = "https://eddevs.com/imgs/disorientis-banner.png";
const path = "../../imgs/disorientis-banner-no-title.png";
const path2 = "../imgs/null.png";
    
export default ({className, defaultImg, imgs}) => {
  return null;
  
  return (
    <picture className={"img " + (className ? " " + className : "")}>
      {(typeof imgs != 'undefined' || imgs === null) ? 
        imgs.map(img => {
          const type = "";
          
          if (img.src.endsWith('.webp')){
            type = "image/webp";
          }
          else if (img.src.endsWith('.jpg') || img.src.endsWith('.jpeg')){
            type = "image/jpeg";
          }
          else if (img.src.endsWith('.gif')){
            type = "image/gif";
          }
          else if (img.src.endsWith('.svg')){
            type = "image/svg+xml";
          }
          
          return (
            <source type={type} media={typeof img.media != 'undefined' ? img.media : ""} srcset={img.src} />
          )
        }) : null
      }
      <img src={defaultImg.src} alt={defaultImg.alt} />
    </picture>
  )
}
