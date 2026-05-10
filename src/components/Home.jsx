import { Link } from 'react-router-dom';
import LogoScroller from './LogoScroller.jsx';
import { FaGlobe ,FaRegChartBar,FaLayerGroup,FaMailBulk,
  FaLightbulb ,FaDirections, FaStar,FaEnvelope, FaInstagram ,
FaBolt, FaUsers, FaPalette,FaPhone,FaLocationArrow,FaChartLine,FaVideo,FaMobileAlt,FaBullhorn} from "react-icons/fa";

import style from './style.module.css'
import home from './home.module.css'


function Home(){

    return(
        <>
        <div className={` ${home.heroSec}`}>
          <div className={home.heroSecColor}>
  <h1>Smart Digital Solutions for Modern Businesses</h1>

  <p className='w-75 m-auto'>
    We help businesses build strong digital foundations, 
    reach the right audience, and achieve measurable growth through strategy,
     design, and technology.
  </p>

  <div className={`d-flex justify-content-center py-5 ${home.btnGroup}`}>
    {/* <Link to="/about" className={home.primaryBtn}>
      Know About Us
    </Link> */}

    <Link to="/contact" className={`${home.secondaryBtn}`}>
      Start Your Project
    </Link>
  </div>
  </div>
</div>
<div className={`py-5 ${home.aboutBg}`}>
  <div className={`container ${home.aboutSection}`}>
  <div className={home.aboutGrid}>

    {/* LEFT SIDE */}
    <div className={home.aboutText}>
      <h1 className={home.title}>
  OUTPUT
  <span> is a digital solutions company</span>
</h1>

      <p>
       focused on delivering high-quality services that combine performance, creativity, and clarity.
      </p>

       <p>
       We work with businesses and startups to transform ideas into effective digital
        experiences — from brand identity and websites to marketing systems that drive real results.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className={home.aboutFeatures}>
<div className={home.whyImage}>
        <img src="https://res.cloudinary.com/do0eee789/image/upload/v1777124067/pexels-photo-15595051_jt6ooo.jpg" alt="team working" />
      </div>
    </div>
    <Link to="/about" className={` w-100 m-auto  ${home.secondaryBtn}`}>More About Us</Link>
  </div>
</div>
</div>
<div className={home.whySection}>
  <div className="container">
    <div className={home.whyGrid}>

      {/* LEFT IMAGE */}
      <div className={home.whyImage}>
        <img src="https://res.cloudinary.com/do0eee789/image/upload/v1777124065/man-hand-working-technology_qwbupd.jpg" alt="team working" />
      </div>

      {/* RIGHT CONTENT */}
       <div className={home.whyContent}>
                        <h2>Why OUTPUT</h2>
                        <div className={home.whyList}>
                
                          <div className={home.whyItem}>
                            <div className={home.icon}><FaPalette /></div>
                            <div className='d-flex align-items-center'>
                              <h4>Clear and structured workflow</h4>
                            </div>
                          </div>
                
                          <div className={home.whyItem}>
                            <div className={home.icon}><FaBolt /></div>
                            <div className='d-flex align-items-center'>
                              <h4>Focus on quality and performance</h4>
                            </div>
                          </div>
                
                          <div className={home.whyItem}>
                            <div className={home.icon}><FaUsers /></div>
                            <div className='d-flex align-items-center'>
                              <h4>Practical solutions tailored to your business</h4>
                            </div>
                          </div>
                          <div className={home.whyItem}>
                            <div className={home.icon}><FaUsers /></div>
                            <div className='d-flex align-items-center'>
                              <h4>Reliable delivery and ongoing support</h4>
                            </div>
                          </div>
                          <div className={home.whyItem}>
                            <div className={home.icon}><FaUsers /></div>
                            <div className='d-flex align-items-center'>
                              <h4>Built with long-term growth in mind</h4>
                            </div>
                          </div>
                
                        </div>
                      </div>

    </div>
  </div>
</div>
        <div className={` ${home.services}`}>
  <h5 className={`pt-5 ${home.title}`}>Our Work</h5>
  <p className={home.bigTitle}>We deliver tailored </p>
  <p className={`w-50 m-auto mb-5 ${home.subtitle}`}>digital solutions across different industries,
     focusing on quality, consistency, and real business impact.

  </p>

  <div className={` container ${home.servicesGrid}`}>
      <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaGlobe />
        <h3 className='px-2'> Website Design & Development</h3>
        </div>
        <p>
          We design and develop modern, responsive websites built to reflect your brand and support your business goals. 
        </p>
        <ul>
          <li>Landing Pages</li>
          <li>Company Websites</li>
          <li>E-commerce Platforms</li>
          <li>Custom Web Solutions</li>
        </ul>
      </div>
  
      <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaBullhorn  />
        <h3 className='px-2'> Digital Marketing</h3>
        </div>
        <p>
          We create structured marketing strategies designed to increase visibility, generate leads, and support long-term growth.
        </p>
        <ul>
          <li>Social Media Management</li>
          <li>Paid Advertising (Meta & Google)</li>
          <li>Content Planning & Strategy</li>
          <li>Lead Generation</li>
        </ul>
      </div>
  
      <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaMobileAlt  />
        <h3 className='px-2'> Mobile Applications</h3>
        </div>
        <p>
          We develop scalable mobile applications focused on usability, performance, and long-term value. 
        </p>
        <ul>
          <li>MVP Development</li>
          <li>Medium & Advanced Applications</li>
        </ul>
      </div>
  
      {/* <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaPalette  />
        <h3 className='px-2'> Design & Branding</h3>
        </div>
        <p>
         We build visual identities that communicate your brand clearly and consistently.
        </p>
        <ul>
          <li>Logo Design</li>
          <li>Brand Identity</li>
          <li>Social Media Design</li>
          <li>Company Profile</li>
        </ul>
      </div> */}
      {/* <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaVideo  />
        <h3 className='px-2'> Video Production</h3>
        </div>
        <p>
          We produce clean, engaging video content tailored to your audience and platform. 
        </p>
        <ul>
          <li>Short-Form Content</li>
          <li>Promotional Videos</li>
        </ul>
      </div> */}
      {/* <div className={home.service}>
        <div className='d-flex align-items-baseline'>
        <FaChartLine  />
        <h3 className='px-2'> Sales Solutions</h3>
        </div>
       <p>
          We help businesses structure their sales process and improve conversion. 
        </p>
        <ul>
          <li>Sales Funnels</li>
          <li>Sales Scripts</li>
          <li>CRM Setup</li>
        </ul>
      </div> */}
    </div>
      <Link to="/services" className={` w-100 m-auto  ${home.secondaryBtn}`}>Check out our services</Link>

</div>
<div className={`container my-5 ${home.splitLine}`}></div>
<LogoScroller />
  <div className={home.borderedSec}>
            <h3>Let’s Work Together</h3>
          
            <p className={home.subtitle}>
              If you’re looking for a reliable partner to support your digital growth,
               we’d be happy to connect.
            </p>
          
            <div className={home.contactList}>
              <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+974 50662121</p>
                </div>
              </div>
              <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>output.website@outlook.com</p>
                </div>
              </div>
          
               <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaLocationArrow />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Doha, Qatar</p>
                </div>
              </div>
               <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaInstagram />
                </div>
                <div>
                  <h4>Instagram</h4>
                  <Link style={{ color:"black" }} to="https://www.instagram.com/output.qa/" target='_blank'>@output.qa</Link>
                </div>
              </div>
          
            </div>
          </div>
        </>
    )
}
export default Home;