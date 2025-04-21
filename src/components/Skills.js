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
            <h2 className="section-title text-center mb-5 slide-in-bottom">The main Characters and Videos of Artimis Atreus</h2>
            <div className="row g-4">
              {characters.map((character, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <CharacterCard character={character} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YouTube Videos Section */}
<div className="container-fluid pillars-section py-5">
  <div className="container">
    <h2 className="section-title text-center mb-5 slide-in-bottom">Check out Artimis' Atreus Youtube Channel</h2>
    <div className="row g-4">
      {[
        {
          title: "WWE 2K24 Muhamad Ali Vs Andre The Giant WrestleMania X",
          url: "https://youtu.be/0wuN9rGI-Qw?si=DBhIcNQ7kF8fGCH_",
          thumbnail: "video1-thumb.png",
          description: "Just a Little what if match I had in mind."
        },
        {
          title: "WWE2K Bloodline Showcase Ep # 1 Yokozuna",
          url: "https://www.youtube.com/watch?v=xuwjU4oRtxk",
          thumbnail: "video1-thumb.png",
          description: "Part 1 of The Bloodlines wwe 2k Showcase..."
        },
        {
          title: "WWE 2k24- Hall Of Fame Fatal 4 Way Steel Cage match!",
          url: "https://youtu.be/-fwMEA_JAro?si=aT0xBk6ssIbZEOsT",
          thumbnail: "video1-thumb.png",
          description: "A little Fantasy Steel Cage Match involving Dusty rhodes taking on RVD, The Hurricane and Honkey Tonk Man in a Fatal 4 Way Steel Cage Match",
        }
        // Add more video objects
      ].map((video, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="video-card pillar-card">
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
              <div className="video-thumbnail">
                <img 
                  src={`../images/${video.thumbnail}`} 
                  alt={video.title}
                  className="img-fluid"
                />
                <div className="play-overlay">
                  <i className="fas fa-play play-icon"></i>
                </div>
              </div>
              <h3 className="video-title mt-3">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Instagram Section */}
<div className="container-fluid pillars-section py-5">
  <div className="container">
    <h2 className="section-title text-center mb-5 slide-in-bottom">Please send any gaming request through my Instagram</h2>
    <div className="row g-4">
      {[
        {
          image: "insta1.png",
          caption: "Concept art coming to life",
          link: "https://www.instagram.com/artimis_the_ebony_dragon?igsh=ZWFzbDJtOGFybTZ4",
          likes: "36",
          date: "Nov-24"
        },
        {
          image: "insta2.png",
          caption: "Studio work in progress",
          link: "https://www.instagram.com/artimis_the_ebony_dragon?igsh=ZWFzbDJtOGFybTZ4",
          likes: " ",
          date: "Feb-23"
        },
        // Add more Instagram posts
      ].map((post, index) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
          <div className="instagram-card pillar-card">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="insta-link">
              <div className="insta-image-container">
                <img 
                  src={`../images/${post.image}`} 
                  alt={post.caption}
                  className="insta-image"
                />
                <div className="insta-overlay">
                  <div className="insta-stats">
                    <span className="me-3"><i className="fas fa-heart me-1"></i>{post.likes}</span>
                    <span><i className="fas fa-calendar-alt me-1"></i>{post.date}</span>
                  </div>
                </div>
              </div>
              <div className="insta-caption p-3">
                <p>{post.caption}</p>
                <div className="insta-cta">
                  View on Instagram <i className="fab fa-instagram ms-2"></i>
                </div>
              </div>
            </a>
          </div>
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