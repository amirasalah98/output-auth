import { Link } from 'react-router-dom';
import { FaEnvelope, FaInstagram,FaBullseye, FaEye,
  FaLightbulb, FaHandshake, FaRocket, FaHeart,FaPhone,FaLocationArrow} from "react-icons/fa";
import home from "./home.module.css";
import style from "./about.module.css";
function About(){

    return(
        <>

       <div className={` ${home.heroSec} ${style.heroSec}`}>
                <div className={`${home.heroSecColor} ${style.heroSecColor}`}>
        <h1>Who We Are</h1>
        </div>
      </div>
      <div className={`py-5 ${home.aboutBg}`}>
        <div className={`container ${home.aboutSection}`}>
        <div>
      
          {/* LEFT SIDE */}
          <div className={`w-100 ${home.aboutText}`}>
            <h1 className={home.title}>
        OUTPUT
        <span> is a digital solutions company</span>
      </h1>
      
            <p style={{maxWidth:"unset"}}>
             focused on delivering high-quality services that combine performance, creativity, and clarity.
            </p>
      
             <p style={{maxWidth:"unset"}}>
             We work with businesses and startups to transform ideas into effective digital
              experiences — from brand identity and websites to marketing systems that drive real results.
            </p>
            <p style={{maxWidth:"unset"}}><b>Our approach</b> is to understand the business, define the objective, and deliver solutions that make an impact.</p>
           <div className='mt-5'> <Link to="/about" className={` w-100 m-auto ${home.secondaryBtn}`}>More About Us</Link> </div>
          </div>
        </div>
      </div>
      </div>
{/* <div className={style.storySection}>
  <div className="container">
    <div className={style.storyGrid}>

      <div className={style.storyContent}>
        <h5 className={style.tag}>Our Story</h5>

        <p className={style.storyContentHeading}>
          It started with a simple idea:
          <span> create meaningful digital experiences</span>
        </p>

        <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>

      <div className={style.storySteps}>

        <div className={style.step}>
          <span>01</span>
          <p>Started as a small creative experiment</p>
        </div>

        <div className={style.step}>
          <span>02</span>
          <p>Built projects focused on design & usability</p>
        </div>

        <div className={style.step}>
          <span>03</span>
          <p>Expanded into full digital solutions</p>
        </div>

        <div className={style.step}>
          <span>04</span>
          <p>Now helping brands grow and innovate</p>
        </div>

      </div>

    </div>
  </div>
</div> */}
{/* <div className={style.mvSection}>
  <div className="container">

    <div className={style.mvHeader}>
      <h5>Our Purpose</h5>
      <p className={style.mvHeaderHeading}>Driven by clarity, focused on impact</p>
    </div>

    <div className={style.mvGrid}>

      <div className={style.mvCard}>
        <div className={style.mvIcon}>
          <FaBullseye />
        </div>

        <h3>Our Mission</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className={`${style.mvCard} ${style.altCard}`}>
        <div className={style.mvIcon}>
          <FaEye />
        </div>

        <h3>Our Vision</h3>

        <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         
        </p>
      </div>

    </div>
  </div>
</div> */}

<div className={style.valuesSection}>
  <div className="container">

    <div className={style.valuesHeader}>
      <h5>Our Approach</h5>
      <p className={style.valuesHeaderHeading}>We follow a structured process to ensure clarity and consistency in every project</p>
    </div>

    <div className={style.valuesGrid}>

      <div className={style.valueCard}>
        <div className={style.icon}><FaLightbulb /></div>
        <h3>Discovery</h3>
        <p>
          Understanding your business, audience, and objectives
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaHandshake /></div>
        <h3>Strategy</h3>
        <p>
          Defining the right approach and direction
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaRocket /></div>
        <h3>Execution</h3>
        <p>
          Designing, building, and delivering the solution
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaHeart /></div>
        <h3>Optimization</h3>
        <p>
          WMonitoring performance and making continuous improvements
        </p>
      </div>

    </div>
  </div>
</div>

<div className={style.storySection}>
        <h3 style={{color:"#cfb361"}}>Clients Feedback</h3>
        <div className={style.storySteps}>
          <p>“Professional approach and consistent quality.”</p>
          <p>“Clear communication and reliable delivery.”</p>
          <p>“A team that understands business needs.”</p>
      </div>
      </div>
    <div className={home.borderedSec} style={{marginTop:"0"}}>
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
export default About;