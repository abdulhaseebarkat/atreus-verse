// import React, { Fragment } from 'react'
// import {SiJavascript,SiMicrosoftsqlserver,SiNodedotjs,SiDotnet,SiReact,SiHtml5,SiCss3,SiBootstrap,SiCsharp,SiMongodb,SiExpress,SiPug} from 'react-icons/si'
// function Skills() {
//   return (
//     <Fragment>
//         <div className="col py-3 d-flex align-items-center"> 
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
//                         <div>
//                             <h1 className="font-big text-red slide-in-top">Still To Come!</h1>
//                             <hr></hr>

//                             <div className="row my-2">

//                                 {/* <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiJavascript className='fs-4'/> JavaScript</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiMicrosoftsqlserver className='fs-4'/> Microsoft SQL Server</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiNodedotjs className='fs-4'/> Node.js</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiDotnet className='fs-4'/> ASP.NET Core</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiReact className='fs-4'/> React</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiHtml5 className='fs-4'/> Html</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiCss3 className='fs-4'/> Css</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiBootstrap className='fs-4'/> Bootstrap</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiCsharp className='fs-4'/> C#</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiMongodb className='fs-4'/> MongoDB</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiExpress className='fs-4'/> Express</span>
//                                 </div>
//                                 <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
//                                     <span><SiPug className='fs-4'/> Pug</span>
//                                 </div> */}
                                
//                             </div>

                            
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-12 col-sm-12">
//                         <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     </Fragment>
//   )
// }

// export default Skills


import React, { Fragment } from 'react';
import './About.css'; // Reuse About.css styles
import CharacterCard from './CharacterCard';

function Skills() {
  // Sample character data
  const characters = [
    {
      name: "Brendon's 3D",
      image: "brend2.png",
      description: "Wanderer of the eternal deserts, bearer of the ancient crown",
      traits: ["Leadership", "Survival", "Mysticism"],
      timeline: "Age of Eternal Sands"
    },
    {
      name: "Brendon's 2D",
      image: "brend1.jpeg",
      description: "Master thief with the ability to meld with shadows",
      traits: ["Stealth", "Agility", "Illusion"],
      timeline: "Era of Veiled Moon"
    },
    // Add more characters
  ];

  return (
    <Fragment>
      <div className="about-screen">
        {/* Hero Section */}
        <div className="container-fluid py-5 d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                <div className="content-wrapper">
                  <h1 className="font-big text-red slide-in-top">
                    Chronicles of <span className="animate-charcter">Atreus-Verse</span>
                  </h1>
                  <div className="gold-bar mb-4 slide-in-bottom"></div>
                  <p className='lead-text slide-in-bottom'>
                    Discover the legendary beings that shape our universe's destiny
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-5 mb-lg-0">
                <img 
                  className="img-fluid floating-animation" 
                  src="../images/Development-pana.png" 
                  alt="Character Showcase" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Character Grid Section */}
        <div className="container-fluid pillars-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5 slide-in-bottom">Featured Characters</h2>
            <div className="row g-4">
              {characters.map((character, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <CharacterCard character={character} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* World Building Section */}
        <div className="container-fluid origin-section py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="story-card slide-in-bottom">
                  <h2 className="mb-4">World Architecture</h2>
                  <p className="lead">
                    Our realms are built with intricate details, from the soaring spires of 
                    Valtheron to the shadowed valleys of Mournfall. Each landscape tells 
                    a story waiting to be explored.
                  </p>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">2016</div>
                      <div className="timeline-content">First realm concept art</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2019</div>
                      <div className="timeline-content">Core geography established</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2023</div>
                      <div className="timeline-content">Interactive map released</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img 
                  className="img-fluid rounded-3" 
                  src="../images/brend3.png" 
                  alt="World Map" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Creation Principles Section */}
        <div className="container-fluid values-section py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 text-center mb-5">
                <h2 className="slide-in-bottom">Creation Principles</h2>
              </div>
              <div className="col-md-6">
                <div className="value-card slide-in-bottom">
                  <div>
                    <h3>Depth First</h3>
                    <p>Every character has rich backstory and motivations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="value-card slide-in-bottom">
                  <div>
                    <h3>Cultural Roots</h3>
                    <p>Drawing inspiration from ancient mythologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;