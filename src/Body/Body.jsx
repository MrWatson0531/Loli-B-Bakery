import "../Body/Body.css";

function Body({ handleAboutClick, handleShopClick }) {
  return (
    <section className="body">
      <h2 className="body__header">Welcome To Loli B Bakery</h2>
      <h2 className="body__text">
        Our treats are near and dear to my heart, each dessert is made like you
        are coming over for dessert with the fam! Our treats have a story,
        whether the recipe was thought up years ago or developed recently there
        is so much love and passion behind each one. Loli B wants the feel of an
        old school bakery (you know the one that would open on the weekends and
        you had to arrive at a certain time otherwise all the good stuff was
        gone). Here we never run out, we are always (unless on vacation) open
        and ready to share a piece of our heart with the world.
      </h2>
      <button
        className="body__about-btn"
        onClick={handleAboutClick}
        type="button"
      >
        A LITTLE MORE ABOUT LOLI B BAKERY
      </button>
      <div className="body__card-scroll"></div>
      <h2 className="body-mid-header">Our Family Recipes</h2>
      <h2 className="body__text">
        Our family recipes are sacred! Growing up my sister and I would spend
        the holiday’s helping my mother bake treats for family and friends.
        Honestly we just wanted to eat the cookie dough, every year I looked
        forward to that special time with my mother and sister. I craved the
        compliments and the leftover cookies! I realized over time my passion
        was always found in the kitchen. When I am stressed, happy, sad, or want
        to make someone I love feel special, I can always be found heating the
        oven up. Why are we ready to share these treats now? Loli B wants to
        spread happiness to the world and we want your loved ones to feel as
        special as our grandmother does when she receives a care package.
      </h2>
      <button
        className="body__shop-btn"
        type="button"
        onClick={handleShopClick}
      >
        SHOP OUR DELICIOUS TREATS!
      </button>
      <ul className="body__card-set"></ul>
      <h2 className="body__header-mid">Enter Alex's World</h2>
    </section>
  );
}

export default Body;