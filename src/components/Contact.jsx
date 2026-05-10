import { useState } from "react";
import {
  FaEnvelope, FaInstagram, FaBullseye, FaEye,
  FaLightbulb, FaHandshake, FaRocket, FaHeart,
  FaPhone, FaLocationArrow
} from "react-icons/fa";
import home from "./home.module.css";
import style from "./contact.module.css";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";

export default function ContactForm() {
  const [success, setSuccess] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const formData = {
          access_key: "424021c8-e209-4b46-b1e9-25f0fcc8cf65",
          name: values.name,
          email: values.email,
          message: values.message,
          subject: "New Contact Form Message",
          botcheck: "" // important spam protection field
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          setSuccess("Message sent successfully!");
          resetForm();
        } else {
          alert("Failed to send message");
        }

      } catch (err) {
        alert("Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {/* HERO SECTION (UNCHANGED DESIGN) */}
      <div className={`${home.heroSec} ${style.heroSec}`}>
        <div className={`${home.heroSecColor} ${style.heroSecColor}`}>
          <h1>Contact Us now</h1>
        </div>
      </div>

      {/* FORM SECTION */}
      <section className={style.contactSection}>
        <div className="container">
          <div className={style.formWrapper}>
            <h2>Let’s build something great</h2>
            <p>Tell us about your project and we’ll get back to you.</p>

            <form onSubmit={formik.handleSubmit} className={style.form}>

              {/* NAME */}
              <div className={style.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <small className="text-danger">
                    {formik.errors.name}
                  </small>
                )}
              </div>

              {/* EMAIL */}
              <div className={style.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger">
                    {formik.errors.email}
                  </small>
                )}
              </div>

              {/* MESSAGE */}
              <div className={style.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <small className="text-danger">
                    {formik.errors.message}
                  </small>
                )}
              </div>

              {/* HONEYPOT (DO NOT REMOVE) */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <button
                type="submit"
                className={`${style.submitBtn} ${style.secondaryBtn}`}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {success && (
            <p className={`my-5 ${style.successMsg}`}>
              {success}
            </p>
          )}

        </div>
      </section>

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
              <Link style={{ color: "black" }} to="https://www.instagram.com/output.qa/" target="_blank">
                @output.qa
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}