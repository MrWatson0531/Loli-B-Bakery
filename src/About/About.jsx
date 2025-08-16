import "../About/About.css";
import IngredientImage from "../Assets/images/BakingIngredients.jpg";
import Social from "../Assets/images/Social.jpg";
import { Link } from "react-router-dom";

function About({ handleShopClick, handleHomeClick }) {
  return (
    <section className="about">
      <img src={IngredientImage} alt="About Picture" className="about__img" />
      <div className="about__text-block">
        <h2 className="about__header">About Loli B Bakery</h2>
        <p className="about__text">
          Hello! I am Alex, a few years ago I graduated from culinary school; I
          was completely burnt out and done with the idea of anything involving
          baking. Throwing away the idea of my business was hard but I
          eventually found my way back on the right path. I couldn’t give up the
          dream or let down my younger self. With our name constantly changing,
          I looked at my two dogs and the rest was history. Lola and Bandit were
          always by my side when I baked morning, noon, or night, and it just
          made sense to name the Bakery after them.
        </p>
        <p className="about__text">
          I want the world to feel like they are at my family’s dinner table,
          laughing and swapping stories over their favorite desserts. Each
          dessert should make you feel like you are receiving a warm hug from
          someone special. Sharing my family recipes is like sharing a piece of
          my heart.
        </p>
        <p className="about__text">
          Do you have a birthday, holiday, or do you love sweets as much as we
          do!? Take a look and send something special to your loved ones, we
          want to make you an honorary family member!
        </p>
        <Link
          className="about__btn"
          onClick={handleShopClick}
          to="/Shop"
          id="about__shop-btn"
        >
          Shop Our Delicious Treats
        </Link>
      </div>
      <div className="about__lower-block">
        <div className="about__lower-text-group">
          <h2 className="about__header-2">Team Support</h2>
          <div className="about__text-block">
            <h2 className="about__header-3">
              Social Media Mastermind - Jessica
            </h2>
            <p className="about__text">
              My name is Jessica and I am the social media marketing manager for
              Loli B Bakery. I am also the owner’s big sister! We are super
              close and all about family! I can tell you first-hand her treats
              are special, delicious, and made with lots of love. I am
              passionate about getting the word out about Loli B Bakery’s
              amazing desserts.
            </p>
          </div>
        </div>
        <img src={ Social } alt="social image" className="about__img-2" />
      </div>
    </section>
  );
}

export default About;
