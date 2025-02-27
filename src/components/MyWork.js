// import React, { Fragment } from 'react'
// import { GrPrevious, GrNext } from 'react-icons/gr';
// import { BsLaptop } from 'react-icons/bs';
// import { AiFillGithub } from 'react-icons/ai';

// function MyWork() {
//   return (
//     <Fragment>
//         <div className="col p-4"> 
//             <div className="p-4 slide-in-top">
                
//                 <div className="row">
//                     <div className="col-6">
//                         <h2 className="ff-jose fw-bold ls-2">NEWS</h2>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className="row">
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/w-01.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                                 <div className="carousel-item">
//                                 <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                                 <div className="carousel-item">
//                                 <img src="../portfolio-images/w-03.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                             <h5 className="ff-jose my-1">Introducing the ONSOL-GO! ManaA One-Shot Program: A Platform for Indie Creators</h5>
                            

//                     </div>
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/m-01.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                                 <div className="carousel-item">
//                                 <img src="../portfolio-images/m-02.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                                 <div className="carousel-item">
//                                 <img src="../portfolio-images/m-03.png" className="d-block w-100" alt="..."/>
//                                 </div>
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                         <div>
//                             <h5 className="ff-jose my-1">ONSOL-GO Welcomes New Series: VICE by TokyFlowManga [@TokyTokyManga]</h5>
                            
//                         </div>
                        
//                     </div>
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/n-01.png" className="d-block w-100" alt="..."/>
//                                 </div>
                                
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                             <h5 className="ff-jose my-1">Unlock Exclusive Content with ONSOL-GO! Magazine Bundle and Subscriber Perks</h5>
                            
                        
//                     </div>
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/solo-01.png" className="d-block w-100" alt="..."/>
//                                 </div>
                               
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                             <h5 className="ff-jose my-1">ManaA: The New Frontier in the world of Comics!</h5>
                           
                        
//                     </div>
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/resume-1.png" className="d-block w-100" alt="..."/>
//                                 </div>
                                
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                             <h5 className="ff-jose my-1">OGO BUMP #001- Soul-Ace, EnDjinn Quest, Zero Point, GANG and more! Coming Christmas 2023!!</h5>
                            
                        
//                     </div>
//                     <div className="col-md-4 text-center my-2">
                        
//                         <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                 <img src="../portfolio-images/tour-01.png" className="d-block w-100" alt="..."/>
//                                 </div>
                                
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
//                                 <GrPrevious/>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
//                                 <GrNext/>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                             <h5 className="ff-jose my-1">Welcome to ONSORU-GO!</h5>
                            
                        
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     </Fragment>
//   )
// }

// export default MyWork


import React, { Fragment } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import './About.css'; // Reuse existing styles

function MyWork() {
  const newsItems = [
    {
      title: "New Creative Frontier: Atreus-Verse Expands",
      date: "March 2024",
      content: "Discover our latest narrative dimensions with three new story arcs entering the canon. The Eternal Sands trilogy introduces never-before-seen desert civilizations."
    },
    {
      title: "Community Art Showcase Winners Announced",
      date: "February 2024",
      content: "Celebrating exceptional fan creations from our global community. View the winning character designs and world concepts in our new gallery."
    },
    {
      title: "Behind the Scenes: Worldbuilding Symposium",
      date: "January 2024",
      content: "Join our lead creators for an exclusive deep dive into the mythos construction process. Limited virtual seats available."
    },
    {
      title: "Character Encyclopedia Update Live",
      date: "December 2023",
      content: "The official compendium now features 150+ detailed entries, including never-released concept art and creator commentaries."
    },
    {
      title: "Interactive Timeline Launched",
      date: "November 2023",
      content: "Explore the Atreus chronology through our new dynamic timeline feature, spanning 10,000 years of in-universe history."
    },
    {
      title: "Creator Spotlight Interview Series",
      date: "October 2023",
      content: "Meet the minds shaping our universe through monthly in-depth interviews starting this winter solstice."
    }
  ];

  return (
    <Fragment>
      <div className="about-screen">
        <div className="container-fluid py-5 min-vh-100">
          <div className="container">
            {/* Header Section */}
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h1 className="font-big text-red slide-in-top">
                  Chronicles & Updates
                </h1>
                <div className="gold-bar mx-auto mb-4 slide-in-bottom"></div>
                <p className="lead-text slide-in-bottom">
                  Stay connected with the evolving Atreus-Verse
                </p>
              </div>
            </div>

            {/* News Grid */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {newsItems.map((item, index) => (
                <div className="col" key={index}>
                  <div className="news-card slide-in-bottom" 
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="card-header">
                      <span className="news-date">{item.date}</span>
                      <h3 className="news-title">{item.title}</h3>
                    </div>
                    <div className="card-body">
                      <p className="news-content">{item.content}</p>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;