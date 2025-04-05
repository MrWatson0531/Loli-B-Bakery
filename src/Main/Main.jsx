import Body from "../Body/Body";

function Main({handleAboutClick, handleShopClick, handleAlexClick, carousel}) {
  return (
    <section className="main">
      <Body
        handleAboutClick={handleAboutClick}
        handleShopClick={handleShopClick}
        handleAlexClick={handleAlexClick}
        carousel={carousel}
      />
    </section>
  );
}

export default Main;
