// import React, { Fragment } from 'react'

// function About() {
//   return (
//     <Fragment>
//         <div className="col py-3 d-flex align-items-center about-image"> 

//             <div className="container">
//                 <div className="row">




//                     <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
//                         <div>
//                             <h1 className="font-big text-red slide-in-top">About Atreus-Verse</h1>
//                             <hr></hr>
//                             <p className='slide-in-bottom'>At Atreus-verse, our mission is to shatter the boundaries of 
//                                 traditional storytelling, bringing an immersive, electrifying experience that captivates
//                                  and inspires dreamers everywhere. We’re building a universe where epic fantasy meets raw 
//                                  reality—a place where the extraordinary becomes real, and every reader becomes part of 
//                                  something greater.
//                             </p>
//                             <p className='slide-in-bottom'>
//                             Fueled by a passion for rich lore and unforgettable characters, Atreus-verse is more than a 
//                             collection of stories; it’s a gateway to adventure. With every tale, we aim to spark imagination, 
//                             forge deep connections, and ignite the spirit of exploration. Our worlds are crafted with heart, 
//                             driven by the same relentless creativity and love for storytelling that fuels our community.
//                             </p>
//                             <p className='slide-in-bottom'>
//                             Atreus-verse isn’t just about creating stories—it’s about pushing the limits of possibility. 
//                             It’s a universe built on resilience, courage, and the pursuit of dreams. As we grow and expand, 
//                             our core promise is unwavering: to be a sanctuary for dreamers and creators, inspiring new generations 
//                             to embrace the extraordinary and chase the impossible.
//                             </p>
//                             <p className='slide-in-bottom'>
                                
//                             </p>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-12 col-sm-12">
//                         <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
//                     </div>



//                 </div>
//             </div>

            
//         </div>
//     </Fragment>
//   )
// }

// export default About


import React from 'react';
import './About.css';
import { GiSpiralArrow, GiStoneBlock, GiSpellBook, GiStarMedal } from 'react-icons/gi';
import { MdGroups, MdOutlineAutoAwesome } from 'react-icons/md';

function About() {
  return (
    <div className="about-screen">
      {/* Hero Section */}  
      <div className="container-fluid py-5 d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="content-wrapper">
                <h1 className="font-big text-red slide-in-top">
                  Crafting Realms of <span className="animate-charcter">Wonder</span>
                </h1>
                <div className="gold-bar mb-4 slide-in-bottom"></div>
                <p className='lead-text slide-in-bottom'>
                  At Atreus-verse, we don't just tell stories - we build living, breathing universes where 
                  every character has a soul and every world pulses with possibility.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-5 mb-lg-0">
              <img 
                className="img-fluid floating-animation" 
                src="../images/nomad-amico.png" 
                alt="World Building Illustration" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Pillars Section */}
      <div className="container-fluid pillars-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5 slide-in-bottom">Our Creative Foundations</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <GiSpiralArrow className="pillar-icon" />
                <h3>Limitless Imagination</h3>
                <p>Building worlds that defy conventional boundaries</p>
                <div className="pillar-number">01</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <GiStoneBlock className="pillar-icon" />
                <h3>Depth & Substance</h3>
                <p>Crafting lore that stands the test of time</p>
                <div className="pillar-number">02</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <MdGroups className="pillar-icon" />
                <h3>Community-Driven</h3>
                <p>Growing through collective creativity</p>
                <div className="pillar-number">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Story */}
      <div className="container-fluid origin-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-card slide-in-bottom">
                <GiSpellBook className="story-icon" />
                <h2 className="mb-4">From Spark to Symphony</h2>
                <p className="lead">
                  What began as single campfire tales evolved into an interconnected multiverse, 
                  with each story thread weaving into a grander tapestry of adventure.
                </p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2015</div>
                    <div className="timeline-content">First character sketches born</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2018</div>
                    <div className="timeline-content">Core mythology established</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2022</div>
                    <div className="timeline-content">Community platform launched</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                className="img-fluid rounded-3" 
                src="../images/creation-process.jpg" 
                alt="Creative Process" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container-fluid values-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center mb-5">
              <h2 className="slide-in-bottom">Why We Create</h2>
            </div>
            <div className="col-md-6">
              <div className="value-card slide-in-bottom">
                <MdOutlineAutoAwesome className="value-icon" />
                <div>
                  <h3>Spark Wonder</h3>
                  <p>Ignite that childhood sense of limitless possibility</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-card slide-in-bottom">
                <GiStarMedal className="value-icon" />
                <div>
                  <h3>Elevate Storytelling</h3>
                  <p>Push narrative boundaries in every medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;