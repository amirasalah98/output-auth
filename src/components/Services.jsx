import LogoScroller from './LogoScroller.jsx';
import { Link } from 'react-router-dom';
import { FaGlobe ,FaRegChartBar,FaLayerGroup,FaMailBulk,
  FaLightbulb ,FaDirections, FaStar,FaEnvelope, FaInstagram ,
FaBolt, FaUsers, FaPalette, FaCheck } from "react-icons/fa";
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
  <p className={`${home.bigTitle} ${style.bigTitle}`}>Services Built to Convert</p>
  <p className={`w-50 m-auto mb-5 ${home.subtitle} ${style.subtitle}`}>
    Every service is precision-engineered to move prospects 
    through your funnel and deliver outcomes that matter
     — revenue, retention, and real growth.
  </p>

  <div className={` container ${home.servicesGrid}`}>
    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaGlobe />
      <h3 className='px-2'> Design</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
    </div>

    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaRegChartBar />
      <h3 className='px-2'> Design</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
    </div>

    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaLayerGroup />
      <h3 className='px-2'> Design</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
    </div>

    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaLightbulb />
      <h3 className='px-2'> Design</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
    </div>
    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaRegChartBar />
      <h3 className='px-2'> Design</h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
    </div>
    <div className={home.service}>
      <div className='d-flex align-items-baseline'>
      <FaMailBulk />
      <h3 className='px-2'> Design</h3>
      </div>
     <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
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
                  <h2>Why Choose Us</h2>
                  <p className={home.subtitle}>
                    We combine creativity, strategy, and technology to deliver experiences
                    that truly make an impact.
                  </p>
          
                  <div className={home.whyList}>
          
                    <div className={home.whyItem}>
                      <div className={home.icon}><FaPalette /></div>
                      <div>
                        <h4>Creative Excellence</h4>
                        <p>We design experiences that stand out and connect emotionally.</p>
                      </div>
                    </div>
          
                    <div className={home.whyItem}>
                      <div className={home.icon}><FaBolt /></div>
                      <div>
                        <h4>Fast & Reliable</h4>
                        <p>We deliver high-quality work with speed and precision.</p>
                      </div>
                    </div>
          
                    <div className={home.whyItem}>
                      <div className={home.icon}><FaUsers /></div>
                      <div>
                        <h4>Client Partnership</h4>
                        <p>We work closely with you as a true extension of your team.</p>
                      </div>
                    </div>
          
                  </div>
                </div>
          
              </div>
            </div>
          </div>
          <div className={home.borderedSec}>
            <h3>Let's Create Something Amazing</h3>
          
            <p className={home.subtitle}>
              Ready to bring your vision to life? Get in touch and let's start building together.
            </p>
          
            <div className={home.contactList}>
              
              <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>hello@yourcompany.com</p>
                </div>
              </div>
          
              <div className={home.contactItem}>
                <div className={home.icon}>
                  <FaInstagram />
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p>@youraccount</p>
                </div>
              </div>
          
            </div>
          </div>
        </>
    )
}
export default Services;