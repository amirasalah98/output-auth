import { useState } from "react";
import { FaEnvelope, FaInstagram} from "react-icons/fa";
import home from "./home.module.css";
import style from "./contact.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
    <div className={` ${home.heroSec} ${style.heroSec}`}>
          <div className={`${home.heroSecColor} ${style.heroSecColor}`}>
  <h1>Contact Us now</h1>

 

  </div>
</div>
    <section className={style.contactSection}>
      <div className="container">
        <div className={style.formWrapper}>
          <h2>Let’s build something great</h2>
          <p>Tell us about your project and we’ll get back to you.</p>

          <form onSubmit={handleSubmit} className={style.form}>
            
            <div className={style.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.inputGroup}>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={`${style.submitBtn} ${style.secondaryBtn}`}>
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
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
  );
}