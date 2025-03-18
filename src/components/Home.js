import React from 'react';
import './Home.css';
import { GiSpinningSword, GiRank3, GiTrophy } from 'react-icons/gi';
import { MdOutlineUpdate, MdGroups } from 'react-icons/md';

function Home() {
  const heroStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/img.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#fff',
    padding: '50px 0'
  };

  return (
    <div className="home-screen">
      {/* Main Hero Section */}
      <div className="container-fluid hero-section" style={heroStyle}>
        <div className="row min-vh-100 align-items-center">
          <div className="col-12 text-content">
            <div className="content-wrapper">
              <h1 className="font-big slide-in-top">Welcome Everybody,</h1>
              <h1 className="font-big animate-charcter">to the Atreus-Verse</h1>
              <p className="lead-text slide-in-bottom neon-text">
                Home to Artimis's Own Characters <br></br>
                This site is the site of the gaming channel for Artimis Atreus
              </p>
              
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary explore-btn slide-in-bottom">
                  Contact Me
                </button>
                <button className="btn btn-outline-primary explore-btn slide-in-bottom">
                  More stories to come!
                </button>
              </div>

              <div className="countdown-box mt-4 slide-in-bottom">
                <h5 className="mb-2">Summary</h5>
                <div className="d-flex gap-2">
                  <div className="countdown-item">
                    <div>05</div>
                    <small>Models</small>
                  </div>
                  <div className="countdown-item">
                    <div>02</div>
                    <small>Completed Stories</small>
                  </div>
                  <div className="countdown-item">
                    <div>∞</div>
                    <small>Creative Possibilities</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-fluid features-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card slide-in-bottom">
                <GiSpinningSword className="feature-icon" />
                <h4>Character Designs</h4>
                <p>I came up with ideas to some amazing Character Designs</p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="feature-card slide-in-bottom">
                <GiRank3 className="feature-icon" />
                <h4>World Building</h4>
                <p>Immersive environments and rich lore development</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card slide-in-bottom">
                <MdGroups className="feature-icon" />
                <h4>Story Crafting</h4>
                <p>Narrative Development for Original Character arcs</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card slide-in-bottom">
                <GiTrophy className="feature-icon" />
                <h4>Art Techniques</h4>
                <p>Mixed Media explorations from digital to traditional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container-fluid newsletter-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <MdOutlineUpdate className="newsletter-icon mb-3" />
              <h2>Follow the creative journey</h2>
              <p className="sub-text">Get updates on new characters, work-in-progress, and exclusive reveals</p>
              
              <div className="newsletter-form mt-4">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email for art updates"
                />
                <button className="btn btn-primary mt-3">
                  Join the Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="additional-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center">
              <h2>Create | Compete | Conquer</h2>
              <p className="sub-text">Explore the evolution of characters and worlds</p>
            </div>
            
            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">08</div>
                <div className="stats-label">Artists involved in commissions</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">01</div>
                <div className="stats-label">3D Model</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">07</div>
                <div className="stats-label">2D Models</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;