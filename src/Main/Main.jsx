import Body from "../Body/Body";

function Main({handleAboutClick, handleShopClick}) {
  return (
    <section className="main">
      <Body
        handleAboutClick={handleAboutClick}
        handleShopClick={handleShopClick}
      />
    </section>
  );
}

export default Main;
