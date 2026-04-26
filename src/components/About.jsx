import { FaEnvelope, FaInstagram,FaBullseye, FaEye,
  FaLightbulb, FaHandshake, FaRocket, FaHeart} from "react-icons/fa";
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
<div className={style.storySection}>
  <div className="container">
    <div className={style.storyGrid}>

      {/* LEFT SIDE */}
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

      {/* RIGHT SIDE (visual timeline style) */}
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
</div>
<div className={style.mvSection}>
  <div className="container">

    <div className={style.mvHeader}>
      <h5>Our Purpose</h5>
      <p className={style.mvHeaderHeading}>Driven by clarity, focused on impact</p>
    </div>

    <div className={style.mvGrid}>

      {/* MISSION */}
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

      {/* VISION */}
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
</div>
<div className={style.valuesSection}>
  <div className="container">

    <div className={style.valuesHeader}>
      <h5>Our Values</h5>
      <p className={style.valuesHeaderHeading}>What drives everything we do</p>
    </div>

    <div className={style.valuesGrid}>

      <div className={style.valueCard}>
        <div className={style.icon}><FaLightbulb /></div>
        <h3>Creativity</h3>
        <p>
          We believe great ideas come from bold thinking and a willingness to explore beyond the obvious.
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaHandshake /></div>
        <h3>Integrity</h3>
        <p>
          We build trust through honesty, transparency, and doing what’s right for our clients.
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaRocket /></div>
        <h3>Excellence</h3>
        <p>
          We aim for high-quality work in everything we deliver—no shortcuts, no compromises.
        </p>
      </div>

      <div className={style.valueCard}>
        <div className={style.icon}><FaHeart /></div>
        <h3>Passion</h3>
        <p>
          We genuinely love what we do, and that energy reflects in every project we create.
        </p>
      </div>

    </div>
  </div>
</div>
      {/* <section className={styles.sectionLight}>
        <h2>Who We Are</h2>
        <p>
          We’re a team of designers and developers passionate about building
          impactful digital products that look great and perform even better.
        </p>
      </section> */}

      {/* FEATURES */}
      {/* <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Results-Driven</h3>
          <p>Everything we build is focused on growth and performance.</p>
        </div>

        <div className={styles.card}>
          <h3>User First</h3>
          <p>We design with real users in mind, not just aesthetics.</p>
        </div>

        <div className={styles.card}>
          <h3>Scalable</h3>
          <p>Our solutions grow with your business.</p>
        </div>
      </section> */}

      {/* VALUES */}
      {/* <section className={styles.sectionDark}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Ownership:</strong> We take responsibility for everything we build.</li>
          <li><strong>Creativity:</strong> We turn ideas into meaningful experiences.</li>
          <li><strong>Simplicity:</strong> Clear solutions over complexity.</li>
        </ul>
      </section> */}

      {/* STATS */}
      {/* <section className={styles.stats}>
        <div>
          <h3>100+</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Clients</p>
        </div>
        <div>
          <h3>5★</h3>
          <p>Satisfaction</p>
        </div>
      </section> */}

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
export default About;