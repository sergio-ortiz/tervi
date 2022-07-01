import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.contact}>
    <div className={styles.container}>
      <h2>Contact Us</h2>

      <form
        id="myForm"
        className={styles.form}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <input id="name" type="text" name="name" placeholder="name" required />
        <input
          id="number"
          type="text"
          name="number"
          placeholder="number"
          required
        />
        <input id="zipcode" type="text" name="zipcode" placeholder="zipcode" />
        <textarea placeholder="message" name="message" id="message"></textarea>
        <input type="submit" value="Send" />
      </form>

      <div className={styles.numbers}>
        <p>Phone:</p>
        <br />
        <a href="tel:2026308110">202-630-8110</a>
      </div>
      <a
        className={styles.whatsappButton}
        href="https://api.whatsapp.com/send?phone=12407315552&text=&source=&data=&app_absent="
      >
        whatsapp <i className="fab fa-whatsapp"></i>
      </a>
    </div>
    <div className={styles.copyright}>
      <p>
        &copy; Copyright All Rights Reserved TerminateVirus{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
