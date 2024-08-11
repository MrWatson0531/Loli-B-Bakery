import "../Contact/Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Contact({ handleFormSubmit }) {
  return (
    <section className="contact">
      <Header />
      <h2 className="contact__header">Contact Us</h2>
      <p className="contact__text">
        If you have questions or want a custom order for a special occasion, or
        want to try a sample box don’t hesitate to contact us!
      </p>
      <div className="contact__name-fields">
        <label htmlFor="firstName" className="contact__label">
          firstName{""}
        </label>
        <input
          type="text"
          className="contact__input"
          placeholder="First Name"
          id={"firstName"}
        />
        <div className="contact__input-border"></div>
        <label htmlFor="lastName" className="contact__label">
          lastName{""}
        </label>
        <input
          type="text"
          className="contact__input"
          placeholder="Last Name"
          id={"lastName"}
        />
        <div className="contact__input-border"></div>
      </div>
      <label htmlFor="Email" className="contact__label">
        Email{""}
      </label>
      <input
        type="text"
        className="contact__input"
        placeholder="Email Address"
        id={"Email"}
      />
      <div className="contact__input-border"></div>
      <label htmlFor="Message" className="contact__label">
        Message{""}
      </label>
      <input type="text" className="contact__message" id={"Message"} />
      <button className="contact__submit" type="submit">
        SUBMIT
      </button>
      <ul className="contact__img-list">
        <li className="contact__img"></li>
        <li className="contact__img"></li>
        <li className="contact__img"></li>
        <li className="contact__img"></li>
      </ul>
      <Footer />
    </section>
  );
}

export default Contact;
