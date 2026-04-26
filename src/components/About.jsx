import styles from './about.module.css'
function About(){

    return(
        <>
 <div>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>We Build Digital Experiences That Drive Results</h1>
        <p>
          We help brands grow through modern web design, performance marketing,
          and creative strategy.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.sectionLight}>
        <h2>Who We Are</h2>
        <p>
          We’re a team of designers and developers passionate about building
          impactful digital products that look great and perform even better.
        </p>
      </section>

      {/* FEATURES */}
      <section className={styles.grid}>
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
      </section>

      {/* VALUES */}
      <section className={styles.sectionDark}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Ownership:</strong> We take responsibility for everything we build.</li>
          <li><strong>Creativity:</strong> We turn ideas into meaningful experiences.</li>
          <li><strong>Simplicity:</strong> Clear solutions over complexity.</li>
        </ul>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
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
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Great Together</h2>
        <button>Contact Us</button>
      </section>

    </div>
        </>
    )
}
export default About;