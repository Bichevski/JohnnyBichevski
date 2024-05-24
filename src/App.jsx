// import { useState } from 'react'bA
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'nmETERa
// a
// import vidos from './assets/vidos.mov';vhorasdstime


import LesHor from "./assets/Les_hor.png";
import LesOverlay from "./assets/Les_overlay.png";
import LesVert from "./assets/Les_vert.png";
import RockHor1 from "./assets/Rock_hor1.png";
import RockHor2 from "./assets/Rock_hor2.png";
import RockOverlay from "./assets/Rock_overlay.png";
import RockVert from "./assets/Rock_vert.png";

import Bashka from "./assets/Bashka.mov";
import Cafworking from "./assets/Cafworking.mov";
import CubicMeter from "./assets/CubicMeter.mov";
// import asds from "./assets/aSda.mp4";

import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <>
      {" "}
      <Header/>
      <section className="model">
        <div className="container">
          <video src={Bashka} autoPlay loop muted></video>
        </div>
      </section>
      <section className="environment">
        <div className="container">
          <h2 className="section-title environment__title">Окружение</h2>
          <div className="environment-wrapper forest">
            <img
              src={LesOverlay}
              width="1072"
              height="600"
              alt="forest"
            />
            <ul className="environment-photos">
              <li className="environment-photos__photo">
                <img
                  src={LesHor}
                  alt="top-left"
                  width="554"
                  height="415"
                />
              </li>
              <li className="environment-photos__photo">
                <img
                  src={LesVert}
                  width="250"
                  height="582"
                  alt="top-right"
                />
              </li>
            </ul>
          </div>
          <div className="environment-wrapper rock">
            <img
              src={RockOverlay}
              alt="rock"
              width="1072"
              height="830"
            />
            <ul className="environment-photos">
              <li className="environment-photos__photo">
                <img
                  src={RockHor1}
                  alt="top-left"
                  width="554"
                  height="415"
                />
              </li>
              <li className="environment-photos__photo">
                <img
                  src={RockVert}
                  width="270"
                  height="1200"
                  alt="top-right"
                />
              </li>
              <li className="environment-photos__photo">
                <img
                  src={RockHor2}
                  width="553"
                  height="411"
                  alt="bottom-left"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="arch">
        <div className="container">
          <h2 className="section-title">ARCH</h2>
          <div className="arch-item">
            <h3 className="arch-item__title">CAFWORKING</h3>
            <video src={Cafworking} autoPlay loop muted></video>
          </div>
        </div>
        <div className="arch-item">
          <div className="container">
            <h3 className="arch-item__title">NEEDLE</h3>
          </div>
          <video src={Cafworking} autoPlay loop muted></video>
        </div>

        <div className="container">
          <div className="arch-item">
            <h3 className="arch-item__title">CUBIC METER</h3>
            <video src={CubicMeter} autoPlay loop muted></video>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-container">
            <p className="skills__text">
              I am a 3D designer with a passion for creating immersive and
              engaging <br />
              experiences. I specialize in a wide range of skills including
              modelling,
              <br />
              sculpting, retopology, texturing, UV-unwrapping, rigging and fluid
              <br />
              simulation. In addition, I also have experience working <br />
              in Adobe Photoshop, Illustrator, InDesign. <br />
              I am fluent in both English and Russian and can also speak Spanish
              <br />
              un poco. <br />
              Currently pursuing Bachelor’s degree in Environmental Design,
              Russian <br />
              Presidential Academy of National Economy and Public
              Administration.
              <br />
              My goal is to create stunning visuals that not only look great
              <br />
              but also enhance overall experience.
            </p>
            <div className="skills-wrapper">
              <div className="skills-section">
                <h3 className="skills-title">PROGRAMS</h3>
                <div className="skill">
                  <h4 className="skill-title">Blender</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Photoshop</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Illustrator</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Da Vinci Resolve</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">InDesign</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Unreal Engine</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Office Pack</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
              </div>
              <div className="skills-section">
                <h3 className="skills-title">LANGUAGES</h3>
                <div className="skill">
                  <h4 className="skill-title">Russian</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">English</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">Spanish</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">JavaScript</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
                <div className="skill">
                  <h4 className="skill-title">C++</h4>
                  <ul className="skill-score">
                    <li className="skill-cirlce white"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                    <li className="skill-cirlce"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
