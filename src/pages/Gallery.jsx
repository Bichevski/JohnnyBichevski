import React from "react";

import undrwtr1 from "../assets/Undrwtr-1.png";
// import undrwtr2 from "../assets/Undrwtr-2.png";
// шьзщке mandom
import RndBs from "../assets/Random-bs.png";

import title from "../assets/title.png";

import RockVert from "../assets/Rock_vert.png";
import RockHor1 from "../assets/Rock_hor1.png";

import RockHor2 from "../assets/Rock_hor2.png";

import LesHor from "../assets/Les_hor.png";
import LesVert from "../assets/Les_vert.png";

import claus from "../assets/Clauss.png";

import interior from "../assets/interior.png";
import Artefucked from "../assets/Artefucked.png";

import "./gallery.styles.css";
// 211""=m""H""rOW
// a""""lElES"Le"""/
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-wrapper">
          <div style={{
            gridColumn: "1 / 4"
          }}>
          <img src={undrwtr1} alt="" />
          </div>
          <div style={{
            gridRow: "1 / 3",
            gridColumn: "4 / 5",
          }}><img src={RndBs} alt="" /></div>
          
          <div className="title" style={{
            gridColumn: "1 / 4",
          }}><img className="title-image" src={title} alt="" /></div>

          <div style={{
            gridColumn: "1/4"
          }}><img src={RockHor1} alt="" /></div>
          <div className="rock--vert"><img src={RockVert} alt="" /></div>
          
          <div style={{
            gridColumn: "1/5"
          }} className="rock--hor-2"><img src={RockHor2} alt="" /></div>

          <div style={{gridColumn: "1/3"}}><img src={LesHor} alt="" className="" /></div>
          <div style={{gridColumn: "3/5", gridRow: "span 2"}} className="less--vert"><img src={LesVert} alt="" /></div>

          <div style={{gridColumn: "1/3"}}><img src={interior} alt="" /></div>  

          <div style={{gridColumn: "1/3"}} className="claus"><img src={claus} alt="" /></div>
          <div style={{gridColumn: "3/5"}} className="claus"><img src={Artefucked} alt="" /></div>
        </div>
      </div>
    </div>
  );
};
// /claus
export default Gallery;
