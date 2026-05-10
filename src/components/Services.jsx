import LogoScroller from './LogoScroller.jsx';
import { Link } from 'react-router-dom';
import { FaGlobe ,FaRegChartBar,FaLayerGroup,FaMailBulk,
  FaLightbulb ,FaDirections, FaStar,FaEnvelope, FaInstagram ,
FaBolt, FaUsers, FaPalette, FaCheck ,FaPhone,FaLocationArrow,FaChartLine,FaVideo,FaMobileAlt,FaBullhorn } from "react-icons/fa";
import home from "./home.module.css"
import style from "./services.module.css"
function Services(){

    return(
        <>
        <div className={` ${home.heroSec} ${style.heroSec}`}>
            <div className={`${home.heroSecColor} ${style.heroSecColor}`}>
                <h1>Our Services</h1>
            </div>
      </div>
        <div className={` ${home.services}`}>
  <h5 className={`pt-5 ${home.title} ${style.title}`}>What We Do</h5>
  <p className={`${home.bigTitle} ${style.bigTitle}`}>We deliver tailored </p>
  <p className={`w-50 m-auto mb-5 ${home.subtitle} ${style.subtitle}`}>digital solutions across different industries, focusing on quality, 
    consistency, and real business impact.

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

    <div className={home.service}>
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
    </div>
    <div className={home.service}>
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
    </div>
    <div className={home.service}>
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
    </div>
  </div>
{/* <div className={style.pricingSection}>
  <div className="container">

    <div className={style.pricingHeader}>
      <h5>Pricing Plans</h5>
      <h2>Flexible marketing solutions for every stage of growth</h2>
      <p>Choose a plan that fits your needs. Upgrade anytime.</p>
    </div>

    <div className={style.pricingGrid}>

      <div className={style.pricingCard}>
        <h3>Starter</h3>
        <h2>$0</h2>
        <p>Perfect for small businesses starting their digital presence.</p>

        <ul>
            <li><FaCheck /> Basic brand audit</li>
            <li><FaCheck /> Social media setup guidance</li>
            <li><FaCheck /> Marketing consultation call</li>
      </ul> 

        <Link to="/contact" className={style.pricingBtn}>
          Contact Us
        </Link>
      </div>

      <div className={`${style.pricingCard} ${style.popular}`}>
        <span className={style.badge}>Most Popular</span>

        <h3>Growth Accelerator</h3>
        <h2>$99</h2>
        <p>Best for businesses ready to scale their online presence.</p>

      <ul>
            <li><FaCheck /> SEO optimization strategy</li>
            <li><FaCheck /> Paid ads setup (Meta / Google)</li>
            <li><FaCheck /> Landing page optimization</li>
            <li><FaCheck /> Monthly performance report</li>
      </ul>

        <Link to="/contact" className={style.pricingBtn}>
          Contact Us
        </Link>
      </div>

      <div className={style.pricingCard}>
      <h3>Full Marketing System</h3>
      <h2>Custom</h2>
      <p>Complete end-to-end digital marketing for scaling brands.</p>

      <ul>
            <li><FaCheck /> Full marketing strategy</li>
            <li><FaCheck /> Advanced SEO + content plan</li>
            <li><FaCheck /> Paid ads management</li>
            <li><FaCheck /> Conversion funnel optimization</li>
            <li><FaCheck /> Dedicated growth support</li>
      </ul>

        <Link to="/contact" className={style.pricingBtn}>
          Contact Us
        </Link>
      </div>

    </div>
  </div>
</div> */}
</div>
          <LogoScroller />
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
export default Services;