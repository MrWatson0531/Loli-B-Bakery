import Cards from "../Cards/Cards";
import "../Body/Body.css";

function Body({ handleAboutClick, handleShopClick, handleAlexClick }) {
  return (
    <section className="body">
      <h2 className="body__header">Welcome To Loli B Bakery</h2>
      <h2 className="body__text">
        <p>
          Our treats are near and dear to my heart, each dessert is made like
          you are coming over for dessert with the fam!
        </p>
        <p>
          Our treats have a story,whether the recipe was thought up years ago or
          developed recently there is so much love and passion behind each one.
        </p>
        <p>
          Loli B wants the feel of an old school bakery (you know the one that
          would open on the weekends and you had to arrive at a certain time
          otherwise all the good stuff was gone).
        </p>
        <p>
          Here we never run out, we are always (unless on vacation) open and
          ready to share a piece of our heart with the world.
        </p>
      </h2>
      <button
        className="body__btn"
        onClick={handleAboutClick}
        type="button"
        id="body__about-btn"
      >
        A LITTLE MORE ABOUT LOLI B BAKERY
      </button>
      <div className="body__card-scroll"></div>
      <h2 className="body__mid-header">Our Family Recipes</h2>
      <h2 className="body__text">
        <p>Our family recipes are sacred!</p>{" "}
        <p>
          Growing up my sister and I would spend the holiday’s helping my mother
          bake treats for family and friends.
        </p>
        <p>
          Honestly, we just wanted to eat the cookie dough. Every year I looked
          forward to that special time with my mother and sister and I craved
          the compliments and the leftover cookies!
        </p>{" "}
        <p>
          I realized over time my passion was always found in the kitchen. When
          I am stressed, happy, sad, or want to make someone I love feel
          special, I can always be found heating the oven up.
        </p>{" "}
        <p>
          Why are we ready to share these treats now? Loli B wants to spread
          happiness to the world and we want your loved ones to feel as special
          as our grandmother does when she receives a care package.
        </p>
      </h2>
      <button
        className="body__btn"
        type="button"
        id="body__shop-btn"
        onClick={handleShopClick}
      >
        SHOP OUR DELICIOUS TREATS!
      </button>
      <Cards />
      <button
        className="body__alex-btn"
        type="button"
        onClick={handleAlexClick}
      >
        Alex's World
      </button>
    </section>
  );
}

export default Body;
