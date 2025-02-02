import Body from "../Body/Body";

function Main({handleAboutClick, handleShopClick, handleAlexClick, Carousel}) {
  return (
    <section className="main">
      <Body
        handleAboutClick={handleAboutClick}
        handleShopClick={handleShopClick}
        handleAlexClick={handleAlexClick}
        Carousel={Carousel}
      />
    </section>
  );
}

export default Main;
