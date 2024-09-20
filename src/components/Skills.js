import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  const [progress, setProgress] = useState({
    socialMediaMarketing: 0,
    webDevelopment: 0,
    uiuxDesign: 0,
    videoEditing: 0
  });

  useEffect(() => {
    const timeout1 = setTimeout(() => setProgress(prev => ({ ...prev, socialMediaMarketing: 96 })), 500);
    const timeout2 = setTimeout(() => setProgress(prev => ({ ...prev, webDevelopment: 89 })), 1000);
    const timeout3 = setTimeout(() => setProgress(prev => ({ ...prev, uiuxDesign: 93 })), 1500);
    const timeout4 = setTimeout(() => setProgress(prev => ({ ...prev, videoEditing: 87 })), 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const gradientStyles = value => buildStyles({
    pathColor: `url(#gradient-${value})`,
    textColor: '#fff',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  });

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Services</h2>
              <p>Expert in Cutting-Edge Web Development, SEO, and Captivating Video Editing.<br></br>Grow Your Business With Our Agency.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div style={{ width: 150, height: 200 }}>
                    <CircularProgressbar 
                      value={progress.socialMediaMarketing} 
                      styles={gradientStyles('socialMediaMarketing')} 
                      text={`${progress.socialMediaMarketing}%`}
                    />
                    <svg>
                      <defs>
                        <linearGradient id="gradient-socialMediaMarketing" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#f00", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h5>Social Media Marketing</h5>
                </div>
                <div className="item">
                  <div style={{ width: 150, height: 200 }}>
                    <CircularProgressbar 
                      value={progress.webDevelopment} 
                      styles={gradientStyles('webDevelopment')} 
                      text={`${progress.webDevelopment}%`}
                    />
                    <svg>
                      <defs>
                        <linearGradient id="gradient-webDevelopment" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#f00", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <div style={{ width: 150, height: 200 }}>
                    <CircularProgressbar 
                      value={progress.uiuxDesign} 
                      styles={gradientStyles('uiuxDesign')} 
                      text={`${progress.uiuxDesign}%`}
                    />
                    <svg>
                      <defs>
                        <linearGradient id="gradient-uiuxDesign" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#f00", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h5>UI/UX Designer</h5>
                </div>
                <div className="item">
                  <div style={{ width: 150, height: 200 }}>
                    <CircularProgressbar 
                      value={progress.videoEditing} 
                      styles={gradientStyles('videoEditing')} 
                      text={`${progress.videoEditing}%`}
                    />
                    <svg>
                      <defs>
                        <linearGradient id="gradient-videoEditing" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#f00", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h5>Video Editing</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
