import { Link } from 'react-router-dom';
import LogoScroller from './LogoScroller.jsx';
import { FaGlobe ,FaRegChartBar,FaLayerGroup,FaMailBulk,
  FaLightbulb ,FaDirections, FaStar,FaEnvelope, FaInstagram ,
FaBolt, FaUsers, FaPalette} from "react-icons/fa";
import style from './style.module.css'
import home from './home.module.css'


function Home(){

    return(
        <>
        <div className={` ${home.heroSec}`}>
          <div className={home.heroSecColor}>
  <h1>We Build Exceptional Experiences</h1>

  <p>
    Innovative solutions that transform ideas into reality through design,
    technology, and creativity
  </p>

  <div className={`d-flex justify-content-center ${home.btnGroup}`}>
    <Link to="/about" className={home.primaryBtn}>
      Know About Us
    </Link>

    <Link to="/contact" className={`${home.secondaryBtn}`}>
      Contact Us Now
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
  We're a team of creatives
  <span> passionate about innovation</span>
</h1>

      <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy 
       text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. 
      </p>

       <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy 
       text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. 
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
        <div className={` ${home.services}`}>
  <h5 className={`pt-5 ${home.title}`}>What We Do</h5>
  <p className={home.bigTitle}>Services Built to Convert</p>
  <p className={`w-50 m-auto mb-5 ${home.subtitle}`}>
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
      <Link to="/services" className={` w-100 m-auto  ${home.secondaryBtn}`}>Check out our services</Link>

</div>
<div className={`container my-5 ${home.splitLine}`}></div>
<LogoScroller />
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
export default Home;